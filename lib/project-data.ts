export interface ProjectData {
  id: string;
  title: string;
  summary: string;
  status: "Completado" | "En Progreso" | "Archivado";
  duration: string;
  role: string;
  type: "professional" | "academic";
  image: string;
  github: string;
  live?: string;
  description: {
    problem: string;
    audience: string;
    purpose: string;
    architecture: string;
  };
  technologies?: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  techNotes?: string;
  features?: Array<{
    title: string;
    description: string;
    details?: string[];
  }>;
  projectSummary?: {
    duration: string;
    status: string;
    role: string;
    teamSize?: string;
    projectType: string;
  };
  demo?: {
    videoUrl: string;
    caption: string;
  };
  screenshots?: Array<{
    url: string;
    caption?: string;
  }>;
}

export const projectsData: ProjectData[] = [
  {
    id: "school-points-management",
    title: "Sistema de Gestión de Puntos Académicos",
    summary:
      "Plataforma web para la gestión y seguimiento de puntos académicos por actividades extracurriculares en una preparatoria, con control por ciclos, generaciones y roles.",
    status: "Completado",
    duration: "2–3 meses",
    role: "Desarrollador Fullstack",
    type: "professional",
    image: "/puntos-uas/login.png",
    live: "https://puntosuaspcumochis.vercel.app/login",
    github: "https://github.com/Jazielillo/horuas",
    description: {
      problem:
        "La institución no contaba con un sistema formal para registrar y dar seguimiento a los puntos académicos obtenidos por los alumnos en actividades deportivas y culturales, lo que provocaba pérdida de información, inconsistencias y falta de transparencia.",
      audience:
        "Preparatorias que requieren un control claro y auditable de puntos académicos por actividades extracurriculares, con distintos niveles de acceso para administradores, coordinadores y alumnos.",
      purpose:
        "Desarrollar un sistema centralizado que permita registrar actividades, asignar puntos a alumnos o grupos, y consultar el progreso académico de manera clara y confiable.",
      architecture:
        "Arquitectura fullstack con Next.js 15 usando App Router, Prisma ORM para el acceso a datos, PostgreSQL como base de datos relacional y autenticación basada en JWT con control de acceso por roles.",
    },
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      backend: ["Next.js Server Actions", "Prisma ORM", "PostgreSQL"],
      tools: ["Zod", "React Hook Form", "JWT", "Git", "Vercel"],
    },
    techNotes:
      "Se utilizó Prisma para garantizar integridad referencial y trazabilidad de los puntos. Zod permitió validar datos tanto en frontend como backend. El diseño del modelo prioriza flexibilidad para futuras reglas académicas como clubes y premios.",
    features: [
      {
        title: "Gestión de Actividades Académicas",
        description:
          "Creación y administración de actividades deportivas y culturales con asignación de puntos.",
        details: [
          "Registro de actividades por ciclo escolar",
          "Asignación de puntos por participación",
          "Soporte para premios y ganadores",
          "Edición controlada de actividades",
        ],
      },
      {
        title: "Asignación de Puntos a Alumnos y Grupos",
        description:
          "Módulo para asignar puntos de forma individual o grupal, con validaciones y control por ciclo.",
        details: [
          "Búsqueda de alumnos por nombre o número de cuenta",
          "Asignación por grado y grupo",
          "Cálculo automático del total de puntos",
          "Registro histórico de cada asignación",
        ],
      },
      {
        title: "Control por Roles",
        description:
          "Sistema de autenticación y autorización con vistas específicas según el rol del usuario.",
        details: [
          "Administrador: configuración del sistema académico",
          "Coordinador: gestión de actividades y puntos",
          "Alumno: consulta de progreso personal",
          "Protección de rutas por rol",
        ],
      },
      {
        title: "Seguimiento y Auditoría",
        description:
          "Trazabilidad completa de los puntos asignados a cada alumno.",
        details: [
          "Registro de cambios y acciones",
          "Historial por alumno y ciclo",
          "Soporte para carga de puntos históricos",
          "Prevención de modificaciones inconsistentes",
        ],
      },
    ],
    projectSummary: {
      duration: "2–3 meses",
      status: "Completado",
      role: "Desarrollador Fullstack",
      teamSize: "1 desarrollador",
      projectType: "Profesional / Institucional",
    },
    demo: {
      videoUrl: "https://www.youtube.com/embed/V6MK5AW2r8s?si=p2Eaghw59_XXTwFm",
      caption:
        "Demostración del sistema mostrando la creación de actividades, asignación de puntos y consulta de progreso por parte de los alumnos.",
    },
    screenshots: [
      {
        url: "/puntos-uas/gestion-actividades.png",
        caption: "Panel de gestión de actividades académicas",
      },
      {
        url: "/puntos-uas/consultas-reportes.png",
        caption: "Consulta de reportes de puntos por alumno y ciclo",
      },
      {
        url: "/puntos-uas/alumno-principal.png",
        caption: "Vista principal del alumno con resumen de puntos",
      },
      {
        url: "/puntos-uas/detalle-alumno.png",
        caption: "Detalle de puntos asignados a un alumno específico",
      },
    ],
  },

  {
    id: "raffle-landing-page",
    title: "Landing Page – Plataforma de Sorteos Online",
    summary:
      "Landing page profesional diseñada para promocionar una plataforma de sorteos, enfocada en conversión de usuarios y claridad del producto.",
    status: "Completado",
    duration: "2 semanas",
    role: "Desarrollador Frontend",
    type: "professional",
    image: "/sirisor/principal-sirisor.png",

    github: "",
    live: "https://sirisor-two.vercel.app/",
    description: {
      problem:
        "El cliente necesitaba una página clara y atractiva para explicar su plataforma de sorteos y convertir visitantes en usuarios registrados.",
      audience:
        "Usuarios interesados en participar u organizar sorteos online, así como emprendedores digitales.",
      purpose:
        "Presentar el producto, comunicar confianza y facilitar la conversión mediante llamados a la acción claros.",
      architecture:
        "Landing page optimizada para rendimiento, SEO y conversión, con diseño responsive.",
    },
    projectSummary: {
      duration: "2 semanas",
      status: "Completado",
      role: "Desarrollador Frontend",
      teamSize: "1 desarrollador",
      projectType: "Profesional / Institucional",
    },
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: [],
      tools: ["Vercel", "Figma"],
    },
    features: [
      {
        title: "Presentación de la Plataforma de Sorteos",
        description:
          "Secciones diseñadas para explicar cómo funciona la plataforma de sorteos y sus ventajas.",
        details: [
          "Hero con propuesta de valor enfocada en sorteos online",
          "Explicación del proceso de participación en sorteos",
          "Beneficios para organizadores y participantes",
          "Testimonios y casos de éxito",
        ],
      },
      {
        title: "Llamados a la Acción Estratégicos",
        description:
          "CTAs optimizados para conversión de usuarios en la plataforma.",
        details: [
          "Registro de usuarios",
          "Botón para crear sorteo",
          "Formulario de contacto",
          "Links a redes sociales",
        ],
      },
      {
        title: "Diseño Responsive",
        description: "Experiencia consistente en móvil, tablet y escritorio.",
        details: [
          "Mobile-first",
          "Optimización visual",
          "Accesibilidad básica",
        ],
      },
    ],
  },
  {
    id: "company-landing-page",
    title: "Landing Page Corporativa – Empresa de Servicios",
    summary:
      "Landing page corporativa profesional para promocionar servicios empresariales de Hero Software, diseñada para mejorar la presencia digital de la empresa.",
    status: "Completado",
    duration: "1–2 semanas",
    role: "Desarrollador Frontend",
    type: "professional",
    image: "/herosoftware/landign.png",
    github: "",
    live: "https://herosoftware-landing-main.vercel.app/",
    projectSummary: {
      duration: "2 semanas",
      status: "Completado",
      role: "Desarrollador Frontend",
      teamSize: "1 desarrollador",
      projectType: "Profesional / Institucional",
    },
    features: [
      {
        title: "Secciones de Conversión",
        description:
          "Estructura pensada para guiar al usuario hacia la acción.",
        details: [
          "Hero con propuesta de valor clara",
          "Llamados a la acción estratégicos",
          "Sección de beneficios",
          "Formulario de contacto o registro",
        ],
      },
      {
        title: "Diseño Responsive",
        description: "Experiencia consistente en móvil, tablet y escritorio.",
        details: [
          "Mobile-first",
          "Optimización visual",
          "Accesibilidad básica",
        ],
      },
    ],
    description: {
      problem:
        "La empresa no contaba con presencia digital profesional para presentar sus servicios.",
      audience:
        "Clientes potenciales interesados en los servicios de la empresa.",
      purpose:
        "Generar confianza, presentar servicios y facilitar el contacto con la empresa.",
      architecture:
        "Landing page estática con enfoque en branding y performance.",
    },
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      backend: [],
      tools: ["Git", "Vercel"],
    },
  },
  {
    id: "social-media-dashboard",
    title: "TalkZone",
    summary:
      "Una plataforma social interactiva con funcionalidades modernas como chat de voz, publicación de contenido y un sistema de seguimiento basado en intereses centrado en temas de aprendizaje.",
    status: "Completado",
    duration: "4 meses",
    role: "Desarrollador Fullstack",
    type: "academic",
    image: "/talkzone/talkzone.webp",
    github: "https://github.com/enriqueBuelna/TalkZone",
    live: "https://cool-croquembouche-188fe7.netlify.app/",
    description: {
      problem:
        "Existía la necesidad de una plataforma que pudiera conectar personas a través de intereses compartidos y áreas de conocimiento, permitiendo interacciones significativas mediante descubrimiento basado en temas y comunicación en tiempo real.",
      audience:
        "Usuarios que buscan conectar con otros que comparten intereses de aprendizaje similares, participar en discusiones de voz y compartir contenido categorizado por temas.",
      purpose:
        "Crear una plataforma social de aprendizaje que facilite el intercambio de conocimiento y la construcción de comunidad a través de salas de chat de voz en tiempo real, contenido basado en temas y emparejamiento inteligente de usuarios según intereses.",
      architecture:
        "Angular SPA implementando principios de Clean Architecture en el frontend, backend Node.js siguiendo Clean Architecture con separación de responsabilidades, MongoDB para almacenamiento flexible de datos, y Socket.io para chat de voz y notificaciones en tiempo real.",
    },
    technologies: {
      frontend: [
        "Angular",
        "TypeScript",
        "Socket.io-client",
        "PrimeNG",
        "Bootstrap",
      ],
      backend: ["Node.js", "Express.js", "Socket.io", "Firebase"],
      tools: ["Git", "Postman", "Figma"],
    },
    demo: {
      videoUrl: "https://www.youtube.com/embed/tVKkaymrJpc?si=6_wKAiba-XZPl_8z",
      caption:
        "Video demostrativo mostrando las características de la plataforma TalkZone incluyendo salas de chat de voz, compartir contenido basado en temas y emparejamiento de usuarios.",
    },
    techNotes:
      "Clean Architecture implementada tanto en frontend como backend para asegurar mantenibilidad y testeabilidad. Algoritmo de emparejamiento basado en temas para conectar usuarios con intereses compartidos. Salas de chat de voz en tiempo real usando WebRTC y Socket.io. Sistema de moderación y herramientas administrativas para gestión de contenido y seguridad de usuarios.",
    features: [
      {
        title: "Características Principales",
        description:
          "Sistema seguro de registro e inicio de sesión con perfiles de usuario personalizables y configuración de privacidad.",
        details: [
          "Publicaciones categorizadas",
          "Comunidades temáticas",
          "Compartir archivos multimedia",
          "Sistema de seguimiento de usuarios",
        ],
      },
      {
        title: "Interacción en Tiempo Real",
        description:
          "Creación de publicaciones con texto, imágenes y enlaces, además de sistema de comentarios y reacciones.",
        details: [
          "Salas de chat de voz en tiempo real",
          "Notificaciones en tiempo real",
          "Mensajería en tiempo real",
        ],
      },
      {
        title: "Administración y Seguridad",
        description:
          "Notificaciones instantáneas para likes, comentarios, seguimientos y menciones.",
        details: [
          "Autenticación y autorización de usuarios",
          "Panel administrativo",
          "Moderación de contenido",
        ],
      },
      {
        title: "Características Avanzadas",
        description:
          "Encuentra y sigue a otros usuarios con un feed personalizado basado en conexiones.",
        details: [
          "Algoritmo de emparejamiento basado en intereses",
          "Sistema de reseñas y calificaciones",
          "Integración con Gemini API para respuestas inteligentes",
          "API REST completa",
        ],
      },
    ],
    projectSummary: {
      duration: "3 meses",
      status: "Completado - Calificación A",
      role: "Desarrollador Fullstack",
      projectType: "Académico / Proyecto Final",
    },
    screenshots: [
      {
        url: "/talkzone/feed.webp",
        caption: "Feed principal con publicaciones e interacciones",
      },
      {
        url: "/talkzone/salas_voz.webp",
        caption: "Salas de chat de voz con comunicación en tiempo real",
      },
      {
        url: "/talkzone/perfil.webp",
        caption: "Página de perfil de usuario con publicaciones e información de seguidores",
      },
      {
        url: "/talkzone/mensajes.webp",
        caption: "Interfaz de mensajería directa entre usuarios",
      },
      {
        url: "/talkzone/conectar.webp",
        caption: "Sistema de descubrimiento de usuarios y emparejamiento basado en intereses",
      },
      {
        url: "/talkzone/notificaciones.webp",
        caption: "Notificaciones en tiempo real para interacciones de usuarios",
      },
      {
        url: "/talkzone/admin.webp",
        caption:
          "Panel administrativo para moderación de contenido y gestión de usuarios",
      },

      {
        url: "/talkzone/estadisticas.webp",
        caption: "Panel de estadísticas mostrando métricas de participación de usuarios",
      },
    ],
  },
  {
    id: "auto-repair-shop",
    title: "Sistema de Gestión de Taller Mecánico",
    summary:
      "Plataforma para gestionar clientes, vehículos, órdenes de servicio e inventario en talleres automotrices, con soporte para múltiples roles y seguimiento de progreso de reparaciones.",
    status: "Completado",
    duration: "3 meses",
    role: "Desarrollador Frontend",
    type: "academic",
    image: "/workshop/taller_mecanico.webp",
    github: "https://github.com",
    description: {
      problem:
        "Los talleres automotrices necesitaban un sistema integral para gestionar clientes, vehículos, órdenes de servicio e inventario de manera eficiente, con capacidad para rastrear el progreso de reparaciones y soportar múltiples roles de usuario.",
      audience:
        "Talleres de reparación de automóviles y centros de servicio automotriz que requieren gestión organizada de operaciones diarias, relaciones con clientes y flujos de trabajo de reparación.",
      purpose:
        "Desarrollar una aplicación frontend que optimice las operaciones del taller proporcionando interfaces intuitivas para gestionar clientes, vehículos, órdenes de servicio, inventario y seguimiento de reparaciones con control de acceso basado en roles.",
      architecture:
        "Aplicación móvil Flutter implementando principios de Clean Architecture con clara separación de responsabilidades, consumiendo una API RESTful backend Spring Boot. Arquitectura basada en componentes con módulos de características, Riverpod para gestión de estado y patrones de programación reactiva.",
    },
    demo: {
      videoUrl: "https://www.youtube.com/embed/KqdzfGzqWkc?si=u-IAuqtmjxnjsUlu",
      caption:
        "Video demostrativo mostrando las características del Sistema de Gestión de Taller Mecánico y la interfaz de usuario.",
    },
    technologies: {
      frontend: ["Flutter", "Dart", "Provider", "Material Design"],
      backend: ["Spring Boot", "Java", "MySQL"],
      tools: ["Git", "Postman", "Docker"],
    },
    techNotes:
      "Implementación frontend con Flutter siguiendo Clean Architecture para asegurar mantenibilidad y escalabilidad. Uso de Riverpod para gestión de estado y patrones de programación reactiva. Navegación basada en roles y guardias de ruta para control de acceso. Colaboración con equipo backend para integrar APIs RESTful de Spring Boot.",
    features: [
      {
        title: "Características Principales",
        description: "Sistema integral de gestión de clientes y vehículos.",
        details: [
          "Gestión de clientes y vehículos asociados",
          "Creación y seguimiento de órdenes de servicio",
          "Control detallado de inventario de repuestos y herramientas",
          "Historial de servicios por vehículo",
        ],
      },
      {
        title: "Administración y Seguridad",
        description: "Control de acceso basado en roles y gestión de empleados.",
        details: [
          "Múltiples roles de usuario (recepcionista, mecánico, administrador)",
          "Gestión de empleados y asignación de tareas",
        ],
      },
      {
        title: "Interfaz y Experiencia de Usuario",
        description:
          "Aplicación móvil multiplataforma con interfaces intuitivas.",
        details: [
          "Control de acceso basado en permisos",
          "Múltiples sucursales y gestión centralizada",
          "Multiplataforma (iOS, Android, Web)",
        ],
      },
    ],
    projectSummary: {
      duration: "3 semanas",
      status: "Completado y Desplegado",
      role: "Desarrollador Individual",
      projectType: "Académico / Proyecto de Aprendizaje",
    },
    screenshots: [
      {
        url: "/workshop/sucursales.webp",
        caption: "Gestión de sucursales con control centralizado",
      },
      {
        url: "/workshop/carros.webp",
        caption: "Interfaz de gestión de clientes y vehículos",
      },
      {
        url: "/workshop/clientes.webp",
        caption: "Vista de detalles de cliente e historial de servicios",
      },
      {
        url: "/workshop/crear_producto.webp",
        caption: "Interfaz de creación de producto y gestión de inventario",
      },
      {
        url: "/workshop/matriz_permisos.webp",
        caption: "Matriz de control de acceso basado en roles",
      },
      {
        url: "/workshop/notificaciones_.webp",
        caption: "Notificaciones en tiempo real para actualizaciones de servicio",
      },
      {
        url: "/workshop/valoracion.webp",
        caption: "Sistema de retroalimentación y calificación de clientes",
      },
    ],
  },
  {
    id: "solovino-app",
    title: "Solovino App",
    summary:
      "Plataforma web para rastreo de mascotas en tiempo real usando GPS y Google Maps.",
    status: "Completado",
    duration: "3 meses",
    role: "Desarrollador FullStack",
    type: "academic",
    image: "/solovino/solovino_app.webp",
    github: "https://github.com",
    description: {
      problem:
        "Una aplicación web que permite a los dueños de mascotas rastrear la ubicación de sus animales en tiempo real usando tecnología GPS y Google Maps. Incluye funciones de geolocalización, alertas de movimiento y un historial de ubicaciones.",
      audience:
        "Dueños de mascotas y cuidadores de animales que necesitan monitorear la ubicación y seguridad de sus mascotas en tiempo real.",
      purpose:
        "Desarrollar una aplicación frontend que proporcione rastreo en tiempo real, alertas e historial de ubicación para mascotas usando GPS y tecnologías de mapeo.",
      architecture:
        "Aplicación web con integración de GPS y Google Maps API para rastreo y visualización de ubicación en tiempo real.",
    },
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Firebase", "Google Maps API"],
      tools: ["Postman"],
    },
    demo: {
      videoUrl: "https://www.youtube.com/embed/QmQx-yUMfY4?si=XmySoZQoVuXga6pI",
      caption:
        "Video demostrativo mostrando las características de Solovino App y la interfaz de usuario.",
    },
    techNotes:
      "Aplicación web construida con JavaScript vanilla e integrada con Google Maps API para rastreo de ubicación en tiempo real. Firebase utilizado para servicios backend incluyendo autenticación y base de datos en tiempo real. Las coordenadas GPS se actualizan continuamente y visualizan en mapas interactivos con marcadores personalizados y capacidades de geocerca.",
    features: [
      {
        title: "Características Principales",
        description: "Sistema integral de gestión de clientes y vehículos.",
        details: [
          "Rastreo de mascotas en tiempo real usando tecnología GPS",
          "Alertas de movimiento fuera de áreas definidas",
        ],
      },
      {
        title: "Interacción en Tiempo Real",
        description: "Control de acceso basado en roles y gestión de empleados.",
        details: [
          "Actualizaciones instantáneas de ubicación de mascotas",
          "Notificaciones push para alertas importantes",
        ],
      },
      {
        title: "Interfaz y Experiencia de Usuario",
        description:
          "Aplicación móvil multiplataforma con interfaces intuitivas.",
        details: [
          "Autenticación de usuario",
          "Control de acceso a información de mascotas",
          "Panel administrativo para gestionar mascotas y usuarios",
        ],
      },
    ],
    projectSummary: {
      duration: "2 meses",
      status: "Completado y Desplegado",
      role: "Desarrollador FullStack",
      projectType: "Académico",
    },
    screenshots: [
      {
        url: "/solovino/presentacion_solovino.webp",
        caption: "Presentación principal de Solovino App",
      },
      {
        url: "/solovino/mapa.webp",
        caption: "Vista del mapa con ubicación en tiempo real de las mascotas",
      },
      {
        url: "/solovino/perros.webp",
        caption: "Lista de mascotas registradas en el sistema",
      },
      {
        url: "/solovino/elegir_mascota.webp",
        caption: "Interfaz para seleccionar mascota a rastrear",
      },
      {
        url: "/solovino/geocerca.webp",
        caption: "Configuración de geocerca para alertas de movimiento",
      },
      {
        url: "/solovino/mostrar-puntos.webp",
        caption: "Visualización de puntos de ubicación en el historial",
      },
      {
        url: "/solovino/cantidad_perros.webp",
        caption: "Estadísticas de cantidad de mascotas registradas",
      },
      {
        url: "/solovino/modificar_pet.webp",
        caption: "Formulario para modificar información de mascota",
      },
      {
        url: "/solovino/mi_usuario.webp",
        caption: "Perfil de usuario con información personal",
      },
    ],
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getProjectsByType(
  type: "professional" | "academic"
): ProjectData[] {
  return projectsData.filter((project) => project.type === type);
}
