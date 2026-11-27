export const statuses = ["Nuevo", "En curso", "Resuelto"] as const;
export type TicketStatus = (typeof statuses)[number];

interface Ticket {
  id: string;
  title: string;
  team: string;
  category: string;
  priority: "Alta" | "Media" | "Baja";
  status: TicketStatus;
  description: string;
}

export const tickets: Ticket[] = [
  { id: "INC-1042", title: "Portátil sin conexión", team: "Administración", category: "Conectividad", priority: "Alta", status: "Nuevo", description: "El portátil dejó de conectarse a la red del equipo tras volver de suspensión. La incidencia afecta a un solo equipo y se reproduce en otra planta." },
  { id: "INC-1041", title: "Acceso a carpetas compartidas", team: "Operaciones", category: "Accesos", priority: "Media", status: "En curso", description: "Una persona del equipo de Operaciones necesita recuperar el acceso a las carpetas de trabajo tras un cambio de equipo. La solicitud está en revisión." },
  { id: "INC-1040", title: "Reinstalación de equipo", team: "Atención al cliente", category: "Equipos", priority: "Media", status: "Nuevo", description: "Se solicita preparar un portátil de reemplazo con el sistema y las herramientas habituales del puesto." },
  { id: "INC-1039", title: "Impresora sin respuesta", team: "Recepción", category: "Periféricos", priority: "Baja", status: "Resuelto", description: "La impresora volvió a responder tras actualizar la configuración del equipo. Recepción confirmó una impresión de prueba." },
  { id: "INC-1038", title: "Monitor externo sin señal", team: "Diseño", category: "Periféricos", priority: "Media", status: "En curso", description: "El equipo enciende y el monitor funciona con otro portátil. Queda pendiente probar una base de conexión de reemplazo." },
];
