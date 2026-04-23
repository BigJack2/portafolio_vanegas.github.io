// Diccionario de traducciones (natural y fluido)
const TRANSLATIONS = {
  es: {
    // Nav
    nav_inicio: "Inicio",
    nav_acerca: "Acerca",
    nav_experiencia: "Experiencia",
    nav_servicios: "Servicios",
    nav_proyectos: "Proyectos",
    nav_contacto: "Contacto",
    nav_descargar: "Descargar HV",
    nav_disc: "Descargar perfil DISC",

    // Hero
    hero_soy: "Soy",
    typed_roles: "desarrollador backend, diseñador web, desarrollador frontend, analista de lógica, administrador T.I.",

    // About
    about_titulo: "Acerca",
    about_parrafo: "Especializado en C#, .NET y Blazor. +4 años construyendo sistemas empresariales robustos, con foco en calidad, rendimiento y buenas prácticas.",
    about_rol: "Desarrollador Backend · C# & .NET · Blazor · PHP",
    about_experiencia: "Más de cuatro años en Siesa contribuyendo al desarrollo de un ERP empresarial de alto nivel técnico: APIs REST, pruebas unitarias con xUnit, integración de IA y flujos ágiles con GitLab y Jira. También fundé y desarrollé en solitario Buhodemica S.A.S., plataforma educativa full-stack.",
    about_dn_fecha: "Fecha de nacimiento:",
    about_whatsapp: "WhatsApp",
    about_ubicacion: "Ubicación",
    about_estado: "Estado Civil:",
    about_soltero: "Soltero",
    about_edad: "Edad",
    about_grado: "Nivel",
    about_grado_valor: "Desarrollador Semi-Senior",
    about_correo: "Correo",
    about_freelance: "Freelance",
    about_disponible: "Disponible",
    about_ingles: "Inglés",
    about_ingles_valor: "Nivel B1",
    about_disc_perfil: "Perfil DISC:",
    disc_tag1: "Orientado a resultados",
    disc_tag2: "Analítico",
    disc_tag3: "Perfeccionista",
    disc_tag4: "Proactivo",
    disc_tag5: "Metódico",
    about_hijos: "Hijos:",
    about_no: "No",
    about_libreta: "Libreta Militar:",
    about_si: "Si",
    about_disponibilidad: "Disponible para reubicación nacional e internacional.",
    about_stat_exp: "años de experiencia",
    about_stat_proj: "proyectos destacados",

    // Skills
    skills_titulo: "Habilidades",
    skills_parrafo: "Mi crecimiento profesional ha sido impulsado por el aprendizaje autodidacta, la disciplina y una búsqueda permanente de la excelencia a través de la práctica y la mejora continua.",

    // Resume / Education
    resume_educacion: "Educación",
    edu_titulo1: "Tecnólogo en Análisis & Desarrollo de Sistemas de Información",
    edu_parrafo1: "Cuento con una formación técnica de alto nivel en el desarrollo de aplicaciones web. Mi paso por el SENA fue una experiencia fundamental que me permitió descubrir mi vocación y pasión por la tecnología.",
    edu_titulo2: "Ingeniería de Sistemas",
    edu_pausa: "(En pausa — faltan dos semestres por cursar)",
    edu_parrafo2: "Tuve la oportunidad de ingresar a esta universidad con la opción de homologar cuatro semestres gracias a mis estudios previos en el SENA. La modalidad virtual me permitió potenciar mis habilidades autodidactas y continuar desarrollándome profesionalmente mientras trabajaba.",
    edu_titulo3: "Cursos complementarios",
    edu_parrafo3: "Formación continua y autodidacta en tecnologías de desarrollo de software, enfocada en el ecosistema .NET, arquitecturas web modernas y buenas prácticas de ingeniería de software.",

    // Resume / Experience
    resume_experiencia: "Experiencia Profesional",
    exp_titulo1: "Analista de sistemas T.I.",
    exp_item1: "Administrar licencias ERP Oracle, Office 365, dominios web, accesos a Sites SharePoint y proveedores tecnológicos.",
    exp_item2: "Compra, soporte y garantías de PCs, impresoras, proyectores, access points y telefonía fija.",
    exp_item3: "Administración y pagos de telefonía fija y móvil.",
    exp_item4: "Aprobación de asignación de licencias ERP y permisos de navegación.",
    exp_item5: "Negociaciones tecnológicas y pagos a proveedores, monitoreo de red, atención de auditorías y creación de instructivos técnicos.",
    exp_item6: "Gestión de proyectos tecnológicos.",
    exp_item7: "Gestión de contratos leasing para adquisición de equipos.",

    exp_titulo2: "Desarrollador Web Full Stack",
    exp_parrafo_buhodemica: "<strong>www.buhodemica.com</strong> fue un proyecto personal que dio origen a una empresa legalmente constituida. Su objetivo fue crear una plataforma educativa innovadora con funcionalidades que superaran la competencia. Como fundador y único desarrollador, asumí la responsabilidad total del proyecto.",
    exp_buh_item1: "Análisis de mercado y definición del modelo de negocio.",
    exp_buh_item2: "Levantamiento y documentación de requerimientos.",
    exp_buh_item3: "Diseño y desarrollo Frontend (HTML5, CSS3).",
    exp_buh_item4: "Desarrollo Backend (PHP, SQL).",
    exp_buh_item5: "Configuración, despliegue y mantenimiento del servidor web.",
    exp_buh_item6: "Desarrollo de nuevas funcionalidades y mejoras continuas.",
    exp_buh_item7: "Soporte técnico y atención a usuarios.",
    exp_buh_item8: "Constitución legal de la empresa y gestión administrativa básica.",
    exp_buh_item9: "Estrategias de marketing digital y posicionamiento en línea.",
    exp_buh_item10: "Prospección de clientes y venta directa del servicio.",
    exp_buh_logro1: "Proyecto escalado a empresa legalmente constituida (Buhodemica S.A.S.), con plataforma desplegada en producción.",

    exp_titulo3: "Docente de Matemáticas",
    exp_doc_item1: "Impartí clases de Matemáticas, Cálculo, Geometría, Física Aplicada y Estadística en niveles de 6.º a 11.º grado.",
    exp_doc_item2: "Diseñé y elaboré la malla curricular del área de Matemáticas, adaptándola a los lineamientos institucionales.",
    exp_doc_item3: "Fomenté el pensamiento lógico y analítico mediante metodologías orientadas a la resolución de problemas.",

    exp_titulo4: "Desarrollador Backend",
    exp_js_item1: "Desarrollador Backend especializado en C# y la plataforma .NET, con enfoque en rendimiento, escalabilidad y mantenibilidad.",
    exp_js_item2: "Aplicación de buenas prácticas: Clean Code, KISS, SOLID y principios de diseño para código claro y eficiente.",
    exp_js_item3: "Desarrollo Frontend dinámico con componentes en C# y Blazor, priorizando la experiencia de usuario.",
    exp_js_item4: "Pruebas unitarias con xUnit y NUnit para garantizar calidad y estabilidad.",
    exp_js_item5: "Integración y consumo de APIs REST usando JSON.",
    exp_js_item6: "Diseñé e integré módulos de <strong>Inteligencia Artificial</strong> en el ERP para automatizar el análisis de hojas de vida y el procesamiento de prompts de código, eliminando horas de revisión manual.",
    exp_js_logro1: "Identifiqué y resolví cuellos de botella en procesos críticos del ERP, logrando mejoras medibles en tiempos de respuesta y estabilidad del sistema.",
    exp_js_item7: "Gestión de versiones con Git y GitLab, incluyendo revisiones.",
    exp_js_item8: "Identificación, análisis y resolución de issues técnicos.",
    exp_js_item9: "Documentación técnica en Word y Markdown para facilitar mantenimiento y escalabilidad.",
    exp_js_item10: "Trabajo bajo metodologías ágiles (Scrum) y backlog mediante Jira.",
    // Services
    services_titulo: "Especialidades",
    services_parrafo: "Áreas en las que puedo aportar valor con experiencia real y resultados concretos.",
    service_front: "Desarrollador Frontend",
    service_front_desc: "Desarrollo de interfaces web responsivas con HTML5, CSS3, Bootstrap 5 y Sass. Manejo de Blazor (C#) y Blade (Laravel) para construir componentes dinámicos y reutilizables, complementado con habilidades en diseño gráfico con CorelDRAW y Photoshop.",
    service_back: "Desarrollador Backend",
    service_back_desc: "Construcción de sistemas robustos en C#, .NET y PHP bajo principios SOLID, Clean Code y KISS. Pruebas unitarias con xUnit/NUnit, consumo e integración de APIs REST, documentación técnica y control de versiones con Git/GitLab.",
    service_data: "Analista de Datos y SQL",
    service_data_desc: "Extracción, transformación y análisis de datos para la toma de decisiones. Sólido dominio de SQL Server y PostgreSQL, con experiencia en reportes, optimización de consultas y manejo de MongoDB para datos no estructurados.",
    service_marketing: "Marketing Digital",
    service_marketing_desc: "Diseño de estrategias de posicionamiento digital y SEO, alineando la solución técnica con los objetivos del negocio. Creación de contenido visual con CorelDRAW y Photoshop orientado a resultados y conversión.",
    service_analista: "Analista de Desarrollo",
    service_analista_desc: "Levantamiento y documentación de requerimientos funcionales y técnicos, evaluación de alcance, tiempos y costos, y definición de criterios de aceptación. Orientado a traducir necesidades del negocio en soluciones de software concretas.",
    service_coord: "Coordinador T.I.",
    service_coord_desc: "Liderazgo de equipos tecnológicos y gestión integral de proyectos, presupuestos, licenciamiento, infraestructura y proveedores. Orientado a alinear la tecnología con los objetivos estratégicos de la organización.",

    // Contact
    contact_titulo: "Contacto",
    contact_subtitulo: "¿Tienes un proyecto en mente? Estoy disponible para colaborar. No dudes en escribirme.",
    contact_ubicacion_t: "Ubicación",
    contact_ubicacion: "El Cerrito (Valle del Cauca - Colombia)",
    contact_correo_t: "Correo",
    contact_whatsapp_t: "WhatsApp",
    contact_whatsapp: "+57 312 4264 832",
    contact_escribir: "Escribir ahora",

    // Footer
    footer_text: "Portafolio de servicios - Sebastian Vanegas",

    // Skills groups
    skill_group_backend: "Backend",
    skill_group_frontend: "Frontend",
    skill_group_db: "Bases de Datos",
    skill_group_devops: "DevOps & Herramientas",
    skill_group_diseno: "Diseño & Marketing",
    skill_group_mgmt: "Gestión T.I.",

    // Portfolio
    portfolio_titulo: "Proyectos destacados",
    portfolio_parrafo: "Selección de proyectos en los que he tenido participación directa como desarrollador, fundador o líder técnico.",
    proj_ia_titulo: "Integración de IA en ERP empresarial",
    proj_ia_desc: "Desarrollo e integración de soluciones de Inteligencia Artificial dentro del ERP de Siesa, orientadas al procesamiento automático de prompts de código y al análisis automatizado de hojas de vida. Construido con C# y .NET.",
    proj_buho_titulo: "Buhodemica S.A.S. — Plataforma educativa",
    proj_buho_desc: "Plataforma educativa online fundada, diseñada y desarrollada en su totalidad. Incluyó análisis de mercado, desarrollo full-stack (PHP + SQL), configuración de servidor, marketing digital y constitución legal de la empresa.",
    proj_github_titulo: "Repositorios en GitHub",
    proj_github_desc: "Proyectos personales y de práctica disponibles en GitHub, incluyendo ejercicios con C#, .NET, Blazor, PHP y bases de datos. Reflejo del aprendizaje continuo y las buenas prácticas aplicadas fuera del entorno laboral.",
    proj_erp_titulo: "Módulos ERP — Siesa",
    proj_erp_desc: "Participación activa durante +4 años en el desarrollo y mejora continua de módulos críticos de un ERP empresarial de alto nivel técnico. Aplicando SOLID, Clean Code, pruebas unitarias, APIs REST y control de versiones con GitLab.",
    proj_invbox_titulo: "Inventory Box — Sistema SaaS de inventario",
    proj_invbox_desc: "Plataforma SaaS de gestión de inventario desarrollada con Laravel y Blade. Incluye gestión de productos con código QR, seguimiento de entradas/salidas, alertas de reabastecimiento, informes en Excel, roles y permisos por usuario, órdenes de compra automatizadas, control de calidad y devoluciones, y acceso multi-dispositivo. Construida con arquitectura modular, protección XSS/CSRF, 2FA y cifrado de datos.",

    // About updated
    about_grado_valor: "Desarrollador Semi-Senior"
  },
  en: {
    // Nav
    nav_inicio: "Home",
    nav_acerca: "About",
    nav_experiencia: "Experience",
    nav_servicios: "Services",
    nav_proyectos: "Projects",
    nav_contacto: "Contact",
    nav_descargar: "Download CV",
    nav_disc: "Download DISC profile",

    // Hero
    hero_soy: "I am",
    typed_roles: "backend developer, web designer, frontend developer, logic analyst, IT administrator",

    // About
    about_titulo: "About",
    about_parrafo: "Specialized in C#, .NET and Blazor. 4+ years building robust enterprise systems, focused on quality, performance and best practices.",
    about_rol: "Backend Developer · C# & .NET · Blazor · PHP",
    about_experiencia: "Over four years at Siesa contributing to a high-level enterprise ERP: REST APIs, unit testing with xUnit, AI integration and agile workflows with GitLab and Jira. I also founded and built Buhodemica S.A.S., a full-stack educational platform, as sole developer.",
    about_dn_fecha: "Date of birth:",
    about_whatsapp: "WhatsApp",
    about_ubicacion: "Location",
    about_estado: "Marital status:",
    about_soltero: "Single",
    about_edad: "Age",
    about_grado: "Level",
    about_grado_valor: "Semi-Senior Developer",
    about_correo: "Email",
    about_freelance: "Freelance",
    about_disponible: "Available",
    about_ingles: "English",
    about_ingles_valor: "B1 Level",
    about_disc_perfil: "DISC Profile:",
    disc_tag1: "Results-oriented",
    disc_tag2: "Analytical",
    disc_tag3: "Perfectionist",
    disc_tag4: "Proactive",
    disc_tag5: "Methodical",
    about_hijos: "Children:",
    about_no: "No",
    about_libreta: "Military record:",
    about_si: "Yes",
    about_disponibilidad: "Open to relocation, both domestically and internationally.",
    about_stat_exp: "years of experience",
    about_stat_proj: "featured projects",

    // Skills
    skills_titulo: "Skills",
    skills_parrafo: "My professional growth has been driven by self-learning, discipline and a continuous pursuit of excellence through practice and improvement.",

    // Resume / Education
    resume_educacion: "Education",
    edu_titulo1: "Technologist in Systems Analysis & Development",
    edu_parrafo1: "I have a strong technical background in web application development. My time at SENA was fundamental in discovering my vocation and passion for technology.",
    edu_titulo2: "Systems Engineering",
    edu_pausa: "(On hold — two semesters remaining)",
    edu_parrafo2: "I had the opportunity to enroll with the possibility of validating four semesters thanks to prior SENA studies. The virtual format strengthened my self-learning skills and allowed me to continue developing professionally while working.",
    edu_titulo3: "Additional courses",
    edu_parrafo3: "I had the opportunity to receive several training courses while working at Carvajal Espacios S.A.S. due to my administrative and technological management duties as Head of Systems. After leaving Carvajal Espacios S.A.S., I continued to improve my knowledge through self-directed learning.",

    // Resume / Experience
    resume_experiencia: "Professional Experience",
    exp_titulo1: "IT Systems Analyst",
    exp_item1: "Manage ERP Oracle licenses, Office 365, web domains, SharePoint site access and technology providers.",
    exp_item2: "Purchase, support and warranties for PCs, printers, projectors, access points and fixed telephony.",
    exp_item3: "Administration and payments for fixed and mobile telephony.",
    exp_item4: "Approval of ERP license assignments and navigation permissions.",
    exp_item5: "Technology vendor negotiations, network monitoring, audit support and creation of technical procedures.",
    exp_item6: "Management of technology projects.",
    exp_item7: "Management of leasing contracts for equipment acquisition.",

    exp_titulo2: "Full Stack Web Developer",
    exp_parrafo_buhodemica: "<strong>www.buhodemica.com</strong> was a personal project that became a legally registered company. It aimed to create an innovative educational platform with features surpassing competitors. As founder and sole developer, I took full responsibility for the project's analysis, development, deployment and management.",
    exp_buh_item1: "Market analysis and business model definition.",
    exp_buh_item2: "Requirements gathering and documentation.",
    exp_buh_item3: "Frontend design and development (HTML5, CSS3).",
    exp_buh_item4: "Backend development (PHP, SQL).",
    exp_buh_item5: "Server configuration, deployment and maintenance.",
    exp_buh_item6: "Development of new features and continuous improvements.",
    exp_buh_item7: "Technical support and user assistance.",
    exp_buh_item8: "Company legal setup and basic administrative management.",
    exp_buh_item9: "Digital marketing strategies and online positioning.",
    exp_buh_item10: "Client prospecting and direct sales of the service.",
    exp_buh_logro1: "Project scaled into a legally incorporated company (Buhodemica S.A.S.), with platform deployed in production.",

    exp_titulo3: "Mathematics Teacher",
    exp_doc_item1: "Taught Mathematics, Calculus, Geometry, Applied Physics and Statistics to grades 6 through 11.",
    exp_doc_item2: "Designed and developed the Mathematics curriculum, aligned with institutional guidelines.",
    exp_doc_item3: "Promoted logical and analytical thinking through problem-solving methodologies.",

    exp_titulo4: "Backend Developer",
    exp_js_item1: "Backend developer specialized in C# and the .NET platform, focused on performance, scalability and maintainability.",
    exp_js_item2: "Applied development best practices: Clean Code, KISS, SOLID and design principles for clear, efficient code.",
    exp_js_item3: "Dynamic frontend development with C# components and Blazor, prioritizing user experience.",
    exp_js_item4: "Unit testing with xUnit and NUnit to ensure quality and stability.",
    exp_js_item5: "Integration and consumption of REST APIs using JSON.",
    exp_js_item6: "Designed and integrated <strong>Artificial Intelligence</strong> modules into the ERP to automate resume screening and code prompt processing, eliminating hours of manual review.",
    exp_js_logro1: "Identified and resolved bottlenecks in critical ERP processes, achieving measurable improvements in response times and system stability.",
    exp_js_item7: "Version control with Git and GitLab.",
    exp_js_item8: "Identification, analysis and resolution of technical issues.",
    exp_js_item9: "Technical documentation in Word and Markdown to facilitate maintenance and scalability.",
    exp_js_item10: "Work under agile methodologies (Scrum) and backlog using Jira.",

    // Services
    services_titulo: "Specialties",
    services_parrafo: "Areas where I can add real value with hands-on experience and concrete results.",
    service_front: "Frontend Developer",
    service_front_desc: "Responsive web interface development with HTML5, CSS3, Bootstrap 5 and Sass. Proficient in Blazor (C#) and Blade (Laravel) for dynamic, reusable components, complemented by graphic design skills in CorelDRAW and Photoshop.",
    service_back: "Backend Developer",
    service_back_desc: "Building robust systems in C#, .NET and PHP following SOLID, Clean Code and KISS principles. Unit testing with xUnit/NUnit, REST API integration, technical documentation and version control with Git/GitLab.",
    service_data: "Data Analyst & SQL",
    service_data_desc: "Data extraction, transformation and analysis for decision-making. Strong proficiency in SQL Server and PostgreSQL, with experience in reports, query optimization and MongoDB for unstructured data.",
    service_marketing: "Digital Marketing",
    service_marketing_desc: "Digital positioning and SEO strategies aligned with business objectives. Visual content creation using CorelDRAW and Photoshop, focused on results and conversion.",
    service_analista: "Development Analyst",
    service_analista_desc: "Functional and technical requirements gathering and documentation, scope, timeline and cost assessment, and acceptance criteria definition. Focused on translating business needs into concrete software solutions.",
    service_coord: "IT Coordinator",
    service_coord_desc: "Leadership of technology teams and comprehensive management of projects, budgets, licensing, infrastructure and vendors. Focused on aligning technology with the organization's strategic objectives.",

    // Contact
    contact_titulo: "Contact",
    contact_subtitulo: "Have a project in mind? I'm available to collaborate. Feel free to reach out.",
    contact_ubicacion_t: "Location",
    contact_ubicacion: "El Cerrito (Valle del Cauca - Colombia)",
    contact_correo_t: "Email",
    contact_whatsapp_t: "WhatsApp",
    contact_whatsapp: "+57 312 4264 832",
    contact_escribir: "Message me now",

    // Footer
    footer_text: "Sebastian Vanegas - Services Portfolio",

    // Skills groups
    skill_group_backend: "Backend",
    skill_group_frontend: "Frontend",
    skill_group_db: "Databases",
    skill_group_devops: "DevOps & Tools",
    skill_group_diseno: "Design & Marketing",
    skill_group_mgmt: "IT Management",

    // Portfolio
    portfolio_titulo: "Featured Projects",
    portfolio_parrafo: "A selection of projects where I had direct participation as developer, founder or technical lead.",
    proj_ia_titulo: "AI Integration in Enterprise ERP",
    proj_ia_desc: "Development and integration of Artificial Intelligence solutions within the Siesa ERP, focused on automated processing of code prompts and automated analysis of resumes. Built with C# and .NET.",
    proj_buho_titulo: "Buhodemica S.A.S. — Educational Platform",
    proj_buho_desc: "Online educational platform founded, designed and developed entirely from scratch. Included market analysis, full-stack development (PHP + SQL), server setup, digital marketing and legal incorporation.",
    proj_github_titulo: "GitHub Repositories",
    proj_github_desc: "Personal and practice projects available on GitHub, including exercises with C#, .NET, Blazor, PHP and databases. A reflection of continuous learning and best practices applied outside of work.",
    proj_erp_titulo: "ERP Modules — Siesa",
    proj_erp_desc: "Active involvement for 4+ years in the development and continuous improvement of critical modules of a high-level enterprise ERP. Applying SOLID, Clean Code, unit testing, REST APIs and version control with GitLab.",
    proj_invbox_titulo: "Inventory Box — SaaS Inventory System",
    proj_invbox_desc: "SaaS inventory management platform built with Laravel and Blade. Features product management with QR codes, stock entries/exits tracking, restock alerts, Excel reports, role-based user permissions, automated purchase orders, quality control and returns, and multi-device access. Built with modular architecture, XSS/CSRF protection, 2FA and data encryption.",

    // About updated
    about_grado_valor: "Semi-Senior Developer"
  }
};

// Elementos con traducción: usan data-i18n
const elementsWithI18n = () => document.querySelectorAll('[data-i18n]');

// Typed.js instance (si existe)
let typedInstance = null;

function initTypedForLang(lang) {
  // Si Typed ya existe, destruirlo si es posible
  try {
    if (typedInstance && typeof typedInstance.destroy === 'function') {
      typedInstance.destroy();
    }
  } catch (e) {
    // ignore
  }

  // obtener items del diccionario -> separar por coma
  const itemsKey = 'typed_roles';
  const itemsText = TRANSLATIONS[lang][itemsKey] || TRANSLATIONS['es'][itemsKey] || '';
  const items = itemsText.split(',').map(s => s.trim()).filter(Boolean);

  // Crear nuevo Typed si la librería está disponible
  if (window.Typed && items.length) {
    typedInstance = new Typed('#typed-roles', {
      strings: items,
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 2000,
      loop: true
    });
  } else {
    // si no hay Typed, asignar el texto plano
    const el = document.getElementById('typed-roles');
    if (el) {
      el.textContent = items.join(', ');
    }
  }
}

function translatePage(lang) {
  const nodes = elementsWithI18n();
  nodes.forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (!key) return;

    // Soporte para contenido con HTML (si la traducción incluye etiquetas)
    const t = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
    if (typeof t === 'string') {
      // mantener etiquetas HTML en la traducción (si las hay)
      node.innerHTML = t;
    }
  });

  // Actualizar <html lang="">
  document.documentElement.lang = (lang === 'es') ? 'es' : 'en';

  // Re-inicializar typed
  initTypedForLang(lang);
}

// Guardar y cargar idioma en localStorage
const LANG_KEY = 'site_lang';

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('lang-select');
  const saved = localStorage.getItem(LANG_KEY) || 'es';
  select.value = saved;
  translatePage(saved);

  // Event listener cambio de select
  select.addEventListener('change', (e) => {
    const newLang = e.target.value || 'es';
    localStorage.setItem(LANG_KEY, newLang);
    translatePage(newLang);
  });

  // Calcular edad (basado en fecha fija) y poner en el span #edad
  try {
    const birth = new Date(1993, 1, 23); // meses 0-indexed (1 = Febrero)
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
      age--;
    }
    const edadEl = document.getElementById('edad');
    if (edadEl) edadEl.textContent = age;
  } catch (e) { /* ignore */ }
});
