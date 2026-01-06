function calcularEdad(anioNacimiento) {
  const anioActual = new Date().getFullYear();
  return anioActual - anioNacimiento;
}

// Establece el año de nacimiento y calcula la edad
const anioNacimiento = 1993;
const edad = calcularEdad(anioNacimiento);

// Inserta la edad en el elemento HTML con id "edad"
document.getElementById('edad').textContent = edad;



// Diccionario de traducciones (natural y fluido)
const TRANSLATIONS = {
  es: {
    // Nav
    nav_inicio: "Inicio",
    nav_acerca: "Acerca",
    nav_experiencia: "Experiencia",
    nav_servicios: "Servicios",
    nav_contacto: "Contacto",
    nav_descargar: "Descargar HV",
    nav_disc: "Descargar perfil DISC",

    // Hero
    hero_soy: "Soy",
    typed_roles: "diseñador web, desarrollador frontend, analista de lógica, desarrollador backend, administrador T.I.",

    // About
    about_titulo: "Acerca",
    about_parrafo: "Soy una persona respetuosa y confiable, buscando siempre superarme para brindar las mejores soluciones tecnológicas. Comprometido con las metas y promoviendo el liderazgo para el mejor avance de los proyectos.",
    about_rol: "Desarrollador Frontend/Backend, Diseñador web & Analista.",
    about_experiencia: "Cuento con una amplia experiencia adquirida mediante el desarrollo de proyectos personales complejos y más de cuatro años de trabajo en Siesa, empresa de software especializada en soluciones empresariales, donde he participado en el desarrollo y mejora continua de un ERP robusto y de alto nivel técnico.",
    about_dn_fecha: "Fecha de nacimiento:",
    about_whatsapp: "Whatsapp:",
    about_ubicacion: "Ubicación:",
    about_estado: "Estado Civil:",
    about_soltero: "Soltero",
    about_edad: "Edad:",
    about_grado: "Grado:",
    about_grado_valor: "Desarrollador Junior",
    about_correo: "Correo:",
    about_freelance: "Freelance:",
    about_disponible: "Disponible",
    about_hijos: "Hijos:",
    about_no: "No",
    about_libreta: "Libreta Militar:",
    about_si: "Si",
    about_disponibilidad: "Disponibilidad para cambio de residencia dentro y fuera del país.",

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
    edu_parrafo3: "Tuve la oportunidad de recibir varias capacitaciones cuando trabajaba en Carvajal Espacios S.A.S. debido a mis funcionalidades de administración y gestión tecnológica como Jefe del área de Sistemas. Después de salir de Carvajal Espacios S.A.S. continué mejorando mi conocimiento con aprendizaje autodidacta.",

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

    exp_titulo3: "Docente de Matemáticas",
    exp_doc_item1: "Impartí clases de Matemáticas, Cálculo, Geometría, Física Aplicada y Estadística en niveles de 6.º a 11.º grado.",
    exp_doc_item2: "Diseñé y elaboré la malla curricular del área de Matemáticas, adaptándola a los lineamientos institucionales.",
    exp_doc_item3: "Fomenté el pensamiento lógico y analítico mediante metodologías orientadas a la resolución de problemas.",

    exp_titulo4: "Desarrollador Jr",
    exp_js_item1: "Desarrollador Backend especializado en C# y la plataforma .NET, con enfoque en rendimiento, escalabilidad y mantenibilidad.",
    exp_js_item2: "Aplicación de buenas prácticas: Clean Code, KISS, SOLID y principios de diseño para código claro y eficiente.",
    exp_js_item3: "Desarrollo Frontend dinámico con componentes en C# y Blazor, priorizando la experiencia de usuario.",
    exp_js_item4: "Pruebas unitarias con xUnit y NUnit para garantizar calidad y estabilidad.",
    exp_js_item5: "Integración y consumo de APIs REST usando JSON.",
    exp_js_item6: "Integración de soluciones de Inteligencia Artificial en un sistema ERP, orientadas al procesamiento de prompts de código y análisis automatizado de hojas de vida.",
    exp_js_item7: "Gestión de versiones con Git y GitLab, incluyendo revisiones y despliegues controlados.",
    exp_js_item8: "Identificación, análisis y resolución de issues técnicos.",
    exp_js_item9: "Documentación técnica en Word y Markdown para facilitar mantenimiento y escalabilidad.",
    exp_js_item10: "Trabajo bajo metodologías ágiles (Scrum) y backlog mediante Jira.",
    // Services
    services_titulo: "Posibles cargos a ocupar",
    service_front: "Desarrollador Frontend",
    service_front_desc: "Amplias habilidades en Corel Draw, CSS3 y Bootstrap 5 que me permiten desarrollar interfaces adaptativas y atractivas.",
    service_back: "Desarrollador Backend",
    service_back_desc: "Experiencia en PHP (estructurado y orientado a objetos), C#, JavaScript y NodeJS para garantizar funcionalidades robustas.",
    service_data: "Analista de Datos y uso de SQL",
    service_data_desc: "Capacidad de análisis de datos para atender soporte y desarrollo sobre bases de datos SQL.",
    service_marketing: "Marketing digital",
    service_marketing_desc: "Capacidad para identificar oportunidades y aplicar correcciones en la estrategia digital.",
    service_analista: "Analista de desarrollo",
    service_analista_desc: "Identifico requerimientos y estimo tiempos, costos y niveles de desarrollo necesarios.",
    service_coord: "Coordinador T.I.",
    service_coord_desc: "Experiencia liderando áreas tecnológicas, manejo de personal, proyectos y presupuestos.",

    // Contact
    contact_titulo: "Contacto",
    contact_ubicacion_t: "Ubicación:",
    contact_ubicacion: "El Cerrito (Valle del Cauca - Colombia)",
    contact_correo_t: "Correo:",
    contact_whatsapp_t: "Whatsapp:",
    contact_whatsapp: "+57 312 4264 832",

    // Footer
    footer_text: "Portafolio de servicios - Sebastian Vanegas"
  },
  en: {
    // Nav
    nav_inicio: "Home",
    nav_acerca: "About",
    nav_experiencia: "Experience",
    nav_servicios: "Services",
    nav_contacto: "Contact",
    nav_descargar: "Download CV",
    nav_disc: "Download DISC profile",

    // Hero
    hero_soy: "I am",
    typed_roles: "web designer, frontend developer, logic analyst, backend developer, IT administrator",

    // About
    about_titulo: "About",
    about_parrafo: "I am a respectful and reliable person, always striving to improve in order to deliver the best technological solutions. Committed to goals and fostering leadership to drive project progress.",
    about_rol: "Frontend/Backend Developer, Web Designer & Analyst.",
    about_experiencia: "I have broad experience gained through complex personal projects and over four years at Siesa, a software company specialized in enterprise solutions, where I contributed to the development and continuous improvement of a robust, high-level ERP.",
    about_dn_fecha: "Date of birth:",
    about_whatsapp: "WhatsApp:",
    about_ubicacion: "Location:",
    about_estado: "Marital status:",
    about_soltero: "Single",
    about_edad: "Age:",
    about_grado: "Level:",
    about_grado_valor: "Junior Developer",
    about_correo: "Email:",
    about_freelance: "Freelance:",
    about_disponible: "Available",
    about_hijos: "Children:",
    about_no: "No",
    about_libreta: "Military record:",
    about_si: "Yes",
    about_disponibilidad: "Willing to relocate domestically and internationally.",

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

    exp_titulo3: "Mathematics Teacher",
    exp_doc_item1: "Taught Mathematics, Calculus, Geometry, Applied Physics and Statistics to grades 6 through 11.",
    exp_doc_item2: "Designed and developed the Mathematics curriculum, aligned with institutional guidelines.",
    exp_doc_item3: "Promoted logical and analytical thinking through problem-solving methodologies.",

    exp_titulo4: "Junior Developer",
    exp_js_item1: "Backend developer specialized in C# and the .NET platform, focused on performance, scalability and maintainability.",
    exp_js_item2: "Applied development best practices: Clean Code, KISS, SOLID and design principles for clear, efficient code.",
    exp_js_item3: "Dynamic frontend development with C# components and Blazor, prioritizing user experience.",
    exp_js_item4: "Unit testing with xUnit and NUnit to ensure quality and stability.",
    exp_js_item5: "Integration and consumption of REST APIs using JSON.",
    exp_js_item6: "Integration of Artificial Intelligence solutions into an ERP system, focused on processing code prompts and automated analysis of resumes.",
    exp_js_item7: "Version control with Git and GitLab, including code reviews and controlled deployments.",
    exp_js_item8: "Identification, analysis and resolution of technical issues.",
    exp_js_item9: "Technical documentation in Word and Markdown to facilitate maintenance and scalability.",
    exp_js_item10: "Work under agile methodologies (Scrum) and backlog using Jira.",

    // Services
    services_titulo: "Possible Roles",
    service_front: "Frontend Developer",
    service_front_desc: "Strong skills in Corel Draw, CSS3 and Bootstrap 5 to build adaptive and attractive interfaces.",
    service_back: "Backend Developer",
    service_back_desc: "Experience in PHP (procedural and OOP), C#, JavaScript and NodeJS to deliver robust functionality.",
    service_data: "Data Analyst and SQL",
    service_data_desc: "Data analysis capabilities to handle support and development tasks using SQL databases.",
    service_marketing: "Digital Marketing",
    service_marketing_desc: "Ability to identify opportunities and implement corrections in digital strategy.",
    service_analista: "Development Analyst",
    service_analista_desc: "I identify requirements and estimate time, cost and development effort.",
    service_coord: "IT Coordinator",
    service_coord_desc: "Experience leading technology teams, managing projects and budgets.",

    // Contact
    contact_titulo: "Contact",
    contact_ubicacion_t: "Location:",
    contact_ubicacion: "El Cerrito (Valle del Cauca - Colombia)",
    contact_correo_t: "Email:",
    contact_whatsapp_t: "WhatsApp:",
    contact_whatsapp: "+57 312 4264 832",

    // Footer
    footer_text: "Sebastian Vanegas - Services Portfolio"
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
