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
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function createCase(parent, shell, edge, interior, accent) {
  add(parent, new RoundedBoxGeometry(2.58, .62, 1.55, 5, .29), shell, 0, -.46, 0);
  add(parent, new RoundedBoxGeometry(2.47, .095, 1.47, 4, .045), edge, 0, -.14, 0);
  add(parent, new RoundedBoxGeometry(2.3, .055, 1.31, 4, .027), interior, 0, -.09, 0);

  for (const side of [-1, 1]) {
    const recess = add(parent, new RoundedBoxGeometry(.76, .028, .59, 4, .014), edge, side * .57, -.054, .095);
    recess.rotation.y = side * .2;
    add(parent, new THREE.SphereGeometry(.032, 12, 8), accent, side * .12, -.43, .776);
  }

  const lid = new THREE.Group();
  lid.position.set(0, -.09, -.754);
  parent.add(lid);
  add(lid, new RoundedBoxGeometry(2.58, .34, 1.55, 5, .165), shell, 0, .166, .754);
  add(lid, new RoundedBoxGeometry(2.36, .041, 1.35, 4, .02), edge, 0, .018, .754);
  add(lid, new RoundedBoxGeometry(1.96, .023, 1, 4, .011), interior, 0, -.007, .754);

  return lid;
}

function createEarbud(parent, side, shell, edge, accent) {
  const bud = new THREE.Group();
  parent.add(bud);
  const head = add(bud, new THREE.SphereGeometry(.224, 32, 20), shell, 0, .11, 0);
  head.scale.set(1.05, .91, .88);
  const stem = add(bud, new THREE.CapsuleGeometry(.094, .34, 8, 18), shell, side * .066, -.12, .03);
  stem.rotation.z = side * -.24;
  const nozzle = add(bud, new THREE.SphereGeometry(.123, 24, 16), edge, side * -.177, .12, .013);
  nozzle.scale.set(.92, 1, .86);
  const panel = add(bud, new THREE.SphereGeometry(.104, 24, 16), accent, 0, .117, .158);
  panel.scale.set(1.2, .91, .38);
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
  renderer.toneMappingExposure = 1.22;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.append(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-3, 3, 1.8, -1.8, .1, 30);
  camera.position.set(.52, 3.5, 8);
  camera.lookAt(0, .39, 0);

  const ambient = new THREE.HemisphereLight(0xe7ddff, 0x251644, 2.05);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffecf1, 3.25);
  key.position.set(-3, 5, 4);
  key.castShadow = true;
  key.shadow.camera.left = -4;
  key.shadow.camera.right = 4;
  key.shadow.camera.top = 3;
  key.shadow.camera.bottom = -3;
  key.shadow.mapSize.set(512, 512);
  key.shadow.normalBias = .026;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x8b74ff, 3.25);
  rim.position.set(3, 3, -4);
  scene.add(rim);

  const environment = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const lightMap = pmrem.fromScene(environment, .04);
  scene.environment = lightMap.texture;
  scene.environmentIntensity = .45;
  environment.dispose();
  pmrem.dispose();

  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(13, 11), new THREE.ShadowMaterial({ opacity: .28 }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -.835;
  shadow.receiveShadow = true;
  scene.add(shadow);

  const model = new THREE.Group();
  scene.add(model);
  const shell = material(0x4934aa, .25, .29);
  const rimMaterial = material(0x21184d, .34, .2);
  const tray = material(0x171334, .66);
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
      trail.surface.opacity = trailAmount * .66;
      if (trailAmount > 0) {
        for (let i = 0; i < trail.count; i += 1) {
          const trailTime = now - .38 * (1 - i / (trail.count - 1));
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

  return {
    render,
    dispose() {
      observer.disconnect();
      const geometries = new Set();
      const materials = new Set();
      scene.traverse(object => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) materials.add(object.material);
      });
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(surface => surface.dispose());
      lightMap.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
