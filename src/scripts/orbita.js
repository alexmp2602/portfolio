import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (start, end, amount) => start + (end - start) * amount;
const ramp = (start, end, time) => clamp((time - start) / (end - start), 0, 1);
const smooth = (start, end, time) => {
  const x = ramp(start, end, time);
  return x * x * (3 - 2 * x);
};

const orbitStart = 2.87;
const orbitEnd = 5.18;
const dockEnd = 6.45;
const launchTime = side => side === -1 ? 1.97 : 2.19;

function flight(side, time, point) {
  const start = launchTime(side);
  const launch = smooth(start, orbitStart, time);
  const orbit = ramp(orbitStart, orbitEnd, time);
  const dock = smooth(orbitEnd, dockEnd, time);
  const angle = (side === -1 ? Math.PI : 0) + orbit * Math.PI * 2;
  const arc = Math.sin(orbit * Math.PI * 2);
  point.set(
    lerp(lerp(side * .57, Math.cos(angle) * 2.03, launch), side * .57, dock),
    lerp(lerp(-.008, 1.19 + arc * side * .33, launch), -.008, dock) + Math.sin(dock * Math.PI) * .2,
    lerp(lerp(.095, .16 + Math.sin(angle) * .89, launch), .095, dock)
  );
}

const material = (color, roughness, metalness = 0) => new THREE.MeshPhysicalMaterial({
  color, roughness, metalness, clearcoat: .35, clearcoatRoughness: .25,
});

function add(parent, shape, surface, x, y, z) {
  const mesh = new THREE.Mesh(shape, surface);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function roundedFootprint(width, depth, radius) {
  const x = width / 2;
  const y = depth / 2;
  const r = Math.min(radius, y);
  const outline = new THREE.Shape();
  outline.moveTo(-x + r, -y);
  outline.lineTo(x - r, -y);
  outline.quadraticCurveTo(x, -y, x, -y + r);
  outline.lineTo(x, y - r);
  outline.quadraticCurveTo(x, y, x - r, y);
  outline.lineTo(-x + r, y);
  outline.quadraticCurveTo(-x, y, -x, y - r);
  outline.lineTo(-x, -y + r);
  outline.quadraticCurveTo(-x, -y, -x + r, -y);
  return outline;
}

function shellGeometry(width, depth, height, radius, bevel, wells = false) {
  const outline = roundedFootprint(width - 2 * bevel, depth - 2 * bevel, radius - bevel);
  if (wells) {
    for (const side of [-1, 1]) {
      const hole = new THREE.Path();
      hole.absellipse(side * .57, -.095, .405, .315, 0, 2 * Math.PI, true, side * .16);
      outline.holes.push(hole);
    }
  }

  const extrusion = height - bevel * 2;
  const geometry = new THREE.ExtrudeGeometry(outline, {
    depth: extrusion,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 5,
    curveSegments: 18,
  });
  geometry.translate(0, 0, -extrusion / 2);
  geometry.rotateX(-Math.PI / 2);
  geometry.computeVertexNormals();
  return geometry;
}

function oval(parent, surface, x, y, z, width, height, depth) {
  const mesh = add(parent, new THREE.SphereGeometry(1, 28, 16), surface, x, y, z);
  mesh.scale.set(width, height, depth);
  return mesh;
}

function createCase(parent, shell, edge, interior, accent) {
  add(parent, shellGeometry(2.48, 1.55, .58, .64, .125), shell, 0, -.47, 0);
  add(parent, shellGeometry(2.43, 1.51, .071, .62, .024), edge, 0, -.17, 0);
  add(parent, shellGeometry(2.35, 1.46, .105, .61, .025, true), interior, 0, -.102, 0);

  for (const side of [-1, 1]) {
    oval(parent, edge, side * .57, -.166, .095, .405, .026, .315);
  }

  const led = add(parent, new THREE.CapsuleGeometry(.025, .076, 4, 10), accent, 0, -.425, .772);
  led.rotation.z = Math.PI / 2;

  const lid = new THREE.Group();
  lid.position.set(0, -.086, -.756);
  parent.add(lid);
  add(lid, shellGeometry(2.48, 1.55, .36, .65, .11), shell, 0, .183, .756);
  add(lid, shellGeometry(2.22, 1.29, .073, .55, .027), interior, 0, .015, .756);
  for (const side of [-1, 1]) {
    const insert = oval(lid, edge, side * .57, -.023, .82, .376, .027, .284);
    insert.rotation.y = side * .16;
  }

  return lid;
}

function createContactShadow() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const drawing = canvas.getContext("2d");
  const fade = drawing.createRadialGradient(64, 64, 2, 64, 64, 64);
  fade.addColorStop(0, "#09051be0");
  fade.addColorStop(.46, "#09051b94");
  fade.addColorStop(1, "#09051b00");
  drawing.fillStyle = fade;
  drawing.fillRect(0, 0, 128, 128);
  const surface = new THREE.MeshBasicMaterial({
    map: new THREE.CanvasTexture(canvas), transparent: true, depthWrite: false, opacity: .8,
  });
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 2.38), surface);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(.08, -.8, .03);
  return shadow;
}

function createEarbud(parent, side, shell, edge, accent) {
  const bud = new THREE.Group();
  parent.add(bud);
  const head = add(bud, new THREE.SphereGeometry(.224, 32, 20), shell, 0, .11, 0);
  head.scale.set(1.05, .91, .88);
  const stem = add(bud, new THREE.CapsuleGeometry(.101, .36, 8, 18), shell, side * .066, -.12, .03);
  stem.rotation.z = side * -.24;
  const nozzle = add(bud, new THREE.SphereGeometry(.123, 24, 16), edge, side * -.177, .12, .013);
  nozzle.scale.set(.92, 1, .86);
  const panel = add(bud, new THREE.SphereGeometry(.104, 24, 16), accent, 0, .117, .158);
  panel.scale.set(1.2, .91, .38);
  const trim = add(bud, new RoundedBoxGeometry(.032, .19, .016, 3, .008), accent, side * .064, -.18, .131);
  trim.rotation.z = side * -.24;
  return bud;
}

function createTrail(parent, color) {
  const count = 24;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const shade = new THREE.Color(color);
  for (let i = 0; i < count; i += 1) {
    const alpha = (i + 1) / count;
    colors.set([shade.r * alpha, shade.g * alpha, shade.b * alpha], i * 3);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const surface = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const line = new THREE.Line(geometry, surface);
  line.frustumCulled = false;
  parent.add(line);
  return { count, positions, geometry, surface };
}

export function mountOrbita(container) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.17;
  container.append(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-3, 3, 1.8, -1.8, .1, 30);
  camera.position.set(.52, 3.5, 8);
  camera.lookAt(0, .39, 0);

  const ambient = new THREE.HemisphereLight(0xe7ddff, 0x251644, 2.05);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffecf1, 2.8);
  key.position.set(-3, 5, 4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x8b74ff, 3.25);
  rim.position.set(3, 3, -4);
  scene.add(rim);

  const environment = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const lightMap = pmrem.fromScene(environment, .04);
  scene.environment = lightMap.texture;
  scene.environmentIntensity = .69;
  environment.dispose();
  pmrem.dispose();

  const model = new THREE.Group();
  scene.add(model);
  model.add(createContactShadow());
  const shell = material(0x5541ae, .26, .35);
  const rimMaterial = material(0x281a52, .37, .14);
  const tray = material(0x281f4d, .58);
  const earbud = material(0x5946c8, .27, .38);
  const touch = material(0xada3ff, .24, .33);
  const accent = new THREE.MeshBasicMaterial({ color: 0xc8ffdf });
  const lid = createCase(model, shell, rimMaterial, tray, accent);
  const buds = [-1, 1].map(side => ({
    side,
    mesh: createEarbud(model, side, earbud, rimMaterial, touch),
    trail: createTrail(model, side === -1 ? 0x948cff : 0xc6ffdf),
  }));
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xc6ffdf, transparent: true, opacity: 0, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.46, .012, 8, 80), ringMaterial);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -.31;
  model.add(ring);
  const position = new THREE.Vector3();
  let time = 0;

  function render(now) {
    time = now;
    const opening = smooth(1.15, 2.22, now);
    const finish = smooth(6.45, 7.38, now);
    lid.rotation.x = -1.82 * opening + .36 * finish;
    model.rotation.y = lerp(-.42, .25, smooth(0, 2.55, now)) - smooth(4.8, 7.52, now) * .61;
    camera.zoom = 1.28 - smooth(1.52, 2.88, now) * .28 + smooth(6.15, 7.52, now) * .2;
    camera.updateProjectionMatrix();

    buds.forEach(({ side, mesh, trail }) => {
      flight(side, now, mesh.position);
      const lift = smooth(launchTime(side), orbitStart, now) * (1 - smooth(orbitEnd, dockEnd, now));
      const turn = ramp(orbitStart, orbitEnd, now) * Math.PI * 2;
      mesh.rotation.set(.13 * lift, turn + side * .47 * lift, side * lerp(1.28, -.35, lift));

      const trailAmount = smooth(orbitStart - .2, orbitStart + .23, now) * (1 - smooth(orbitEnd + .13, dockEnd - .22, now));
      trail.surface.opacity = trailAmount * .75;
      if (trailAmount > 0) {
        for (let i = 0; i < trail.count; i += 1) {
          const trailTime = now - .54 * (1 - i / (trail.count - 1));
          flight(side, trailTime, position);
          trail.positions.set([position.x, position.y, position.z], i * 3);
        }
        trail.geometry.attributes.position.needsUpdate = true;
      }
    });

    const pulse = ramp(dockEnd - .04, 7.39, now);
    ring.scale.setScalar(1 + pulse * .43);
    ringMaterial.opacity = Math.sin(pulse * Math.PI) * .57;
    renderer.render(scene, camera);
  }

  const resize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    const aspect = width / height;
    camera.left = -1.79 * aspect;
    camera.right = 1.79 * aspect;
    camera.top = 1.79;
    camera.bottom = -1.79;
    renderer.setSize(width, height, false);
    render(time);
  };
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  resize();

  return { render };
}
