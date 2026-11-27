export const links = {
  email: "mailto:alexmp.2602@gmail.com",
  linkedin: "https://www.linkedin.com/in/alex-pereyra-dev/",
  github: "https://github.com/alexmp2602",
};

export const work = [
  {
    slug: "iabot",
    title: "IABOT 4.0",
    type: "Web educativa",
    description: "Una nueva web para que las familias puedan entender qué se aprende en IABOT y encontrar un curso por edad y sede.",
    role: "UX/UI y desarrollo frontend",
    image: "/redesign/iabot.webp",
    alt: "Robot LEGO WeDo junto a la tablet desde la que se programa",
    theme: "robotics",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    site: "https://www.iabot.com.ar/",
    source: "https://github.com/alexmp2602/iabot-v4",
    context: "IABOT necesitaba una web que explicara su propuesta de robótica con la claridad con la que se explica en el aula. Una familia puede llegar buscando un curso para una edad concreta, una sede cercana o un primer acercamiento a la robótica.",
    approach: "Organicé la información en torno a cursos y sedes, con páginas específicas para cada propuesta. Trabajé el diseño y la implementación en Next.js, con imágenes optimizadas y metadatos por página. Mi experiencia dando clases en IABOT ayudó a priorizar datos concretos como las edades, el contenido y el camino a la inscripción.",
    outcome: "El sitio reúne cursos, sedes, capacitación docente y actividades para empresas. Cada propuesta tiene su propia página y un recorrido claro hacia la consulta o la inscripción.",
  },
  {
    slug: "minuto-de-silencio",
    title: "Minuto de Silencio",
    type: "Experiencia interactiva",
    description: "Un espacio web para acompañar una despedida, con una escena 3D, audio y mensajes compartidos.",
    role: "Desarrollo frontend interactivo",
    image: "/redesign/minuto.webp",
    alt: "Captura de la experiencia web Minuto de Silencio",
    theme: "ritual",
    stack: ["Next.js", "React Three Fiber", "TypeScript", "Supabase"],
    site: "",
    source: "https://github.com/alexmp2602/minutodesilencio",
    context: "El proyecto explora cómo trasladar un ritual de despedida a un formato web. El recorrido combina momentos de pausa, interacción con la escena y participación a través de mensajes.",
    approach: "Integré la escena y la interfaz como parte de un mismo recorrido. La escena 3D se carga de forma diferida y las acciones se organizan en estados, para que el audio, los mensajes y las transiciones acompañen cada momento.",
    outcome: "El sitio permite recorrer la experiencia e interactuar con la escena. Supabase aporta la capa de mensajes compartidos.",
  },
  {
    slug: "sigj",
    title: "SIGJ",
    type: "Demo de aplicación",
    description: "Un prototipo de gestión judicial para consultar expedientes, documentación y agenda desde una misma interfaz.",
    role: "Desarrollo de la demo",
    image: "/redesign/sigj.webp",
    alt: "Captura de la interfaz de la demo SIGJ",
    theme: "systems",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    site: "",
    source: "",
    context: "Una aplicación de gestión tiene que hacer visible el estado de cada expediente y facilitar el paso entre el listado, la documentación y la agenda. La experiencia trabajando con sistemas municipales dio contexto a este prototipo.",
    approach: "La interfaz combina listados y pantallas de detalle. Priorizé la jerarquía de información y la consistencia de los controles, con especial atención a la navegación por teclado y los estados de foco.",
    outcome: "La captura muestra el prototipo de portfolio. Es una demo independiente del sistema oficial.",
  },
];

export const experience = [
  {
    organization: "Nodra Studio",
    role: "Cofundador",
    detail: "Defino el alcance de proyectos web y trabajo en su diseño y desarrollo junto a mi socio.",
  },
  {
    organization: "Hogarth Argentina · WPP",
    role: "Producción frontend freelance",
    detail: "Desarrollé piezas HTML5 animadas con GSAP para campañas digitales, con límites de peso y requisitos de entrega específicos.",
  },
  {
    organization: "IABOT Robótica Educativa",
    role: "Profesor y coordinador",
    detail: "Di clases y coordiné talleres de robótica y programación. También diseñé y desarrollé la nueva web.",
  },
  {
    organization: "Municipalidad de Mercedes",
    role: "Desarrollo full stack y soporte IT",
    detail: "Desarrollé y mantuve sistemas internos y trabajé con sus usuarios para entender problemas de uso y resolver incidencias.",
  },
];
