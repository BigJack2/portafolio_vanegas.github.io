# Hoja de vida — Sebastián Vanegas

Versión única, válida tanto para plataformas de empleo (ATS) como para envío directo a reclutadores.
Generada a partir de `Hoja_de_Vida_Sebastian_Vanegas.pdf` (original, sin modificar) y del portafolio
<https://bigjack2.github.io/portafolio_vanegas.github.io/>.

## Archivos

Los cuatro tienen **exactamente el mismo contenido**, en formatos distintos:

| Archivo | Para qué |
|---|---|
| `HV_Sebastian_Vanegas.docx` | **El principal.** Se sube a portales de empleo y se adjunta en correos a reclutadores. Si la vacante exige PDF: abrilo en Word y usá *Guardar como → PDF* (conserva el texto seleccionable, que es lo que el ATS necesita). |
| `HV_Sebastian_Vanegas.md` | Para editar rápido y adaptarlo por vacante, o versionarlo en Git. |
| `HV_Sebastian_Vanegas.txt` | Para formularios que piden **pegar** el CV en un cuadro de texto, y para ATS antiguos que solo aceptan `.txt`. |
| `HV_Sebastian_Vanegas.json` | Estructura **JSON Resume** (esquema estándar). Para que cualquier IA o parser lea el perfil sin ambigüedad. |

**Cédula de ciudadanía 1114828928** está en los cuatro archivos, en el bloque de datos personales
(campo `identityDocument` en el JSON).

> Si modificás el `.md`, acordate de reflejar el cambio en los otros tres para que no se desincronicen.

---

## Cómo funciona para las dos audiencias a la vez

No hay conflicto real entre «CV para ATS» y «CV para reclutador»: el ATS filtra por **estructura y
palabras clave**, el reclutador decide por **contenido y logros**. Este documento cumple lo primero en
el formato y lo segundo en la redacción.

**Estructura (lo que lee el ATS)**

- Una sola columna. Sin tablas, cuadros de texto, encabezados ni pies de página: es donde los parsers pierden información.
- Sin imágenes, iconos, logos, foto ni barras de nivel de habilidad.
- Fuente estándar (Calibri) entre 10 y 20 pt; viñetas nativas de Word.
- Títulos de sección con los nombres que los ATS reconocen: *Perfil profesional, Experiencia profesional, Educación, Competencias técnicas, Idiomas*.
- Fechas en formato consistente `Mes Año - Mes Año`, siempre en la misma línea que empresa y ubicación.
- Cargo → empresa | ubicación | periodo, en ese orden y en párrafos separados: es el patrón que esperan los parsers.
- Línea `Tecnologías:` al cierre de cada empleo y de cada proyecto: concentra las palabras clave donde el ATS las asocia a una experiencia real, no sueltas.

**Contenido (lo que lee el reclutador)**

- Perfil profesional de cinco líneas con stack, años, dominio (ERP + SaaS) y nivel de inglés: es lo único que muchos leen completo.
- Sección **Logros destacados** al inicio, con cifras, antes de que haya que bajar a la experiencia.
- Viñetas redactadas como impacto y no como lista de tareas, pero conservando los términos técnicos que el ATS busca. Ejemplo: *«Incorporé pruebas unitarias con xUnit y NUnit y validaciones con FluentValidation al entregable estándar, desplazando defectos que antes solo se detectaban en pruebas manuales»* — sirve a las dos lecturas en la misma frase.
- Variantes en inglés incorporadas de forma natural (*pruebas unitarias (unit testing)*, *revisión de código (code review)*, *Desarrollador Backend (Backend Developer)*) en lugar de un bloque final de palabras clave, que a un humano le puede leerse como relleno.

Verificación hecha sobre el `.docx`: 0 tablas, 0 imágenes, 1 sección, sin texto en encabezado ni pie, y
extracción a texto plano completa (11.093 caracteres).

---

## Qué cambió frente al PDF original

**1. El cargo actual estaba desactualizado.** El PDF decía «Desarrollador Jr» y el portafolio dice «Desarrollador Mid» con más de 4 años en la empresa. Se unificó en **Desarrollador Mid**: un «Jr» con 4 años de ERP en el título te encasilla en un rango salarial antes de que lean el contenido.

**2. Se agregó InventoryBox, que era el activo más fuerte y no estaba en el CV.** Un SaaS multiempresa con 163 endpoints, RBAC de 47 permisos, 2FA y Docker, construido en solitario, es la mejor evidencia de seniority disponible. Ahora abre la experiencia.

**3. Responsabilidades → logros con cifras.** El original listaba tareas («desarrollo de componentes en Blazor»). Los números concretos (25+ modelos, 12 métodos de pago, 40+ reportes, 163 endpoints, 6 estados) son lo que diferencia dos CVs con el mismo stack.

**4. Titular orientado a búsqueda.** «Desarrollador Frontend/Backend, Diseñador Web & Analista» era demasiado disperso: un perfil que dice que hace todo compite mal contra uno que dice que es bueno en algo. Ahora ancla en **Backend .NET**, con Laravel como capacidad secundaria.

**5. Orden de secciones.** Competencias técnicas quedó cerca del inicio: en perfiles técnicos, el primer filtro es de stack.

**6. Se eliminaron los niveles autoasignados poco creíbles.** «Corel Draw (Avanzado)» junto a «JavaScript (Básico)» en un CV de backend resta. El diseño gráfico y el marketing siguen, pero al final y sin protagonismo.

**7. Docencia reencuadrada.** Tres años como docente en medio de una carrera técnica se leen como pausa; ahora se presentan como capacidad de comunicación y de estructurar contenido complejo, que es lo que aporta al rol.

---

## Antes de enviarlo

Esto es lo que un reclutador va a notar. No lo puse en el CV porque no tengo el dato:

1. **Métricas reales en Siesa.** Falta lo cuantificable: cuántos módulos, cuántos usuarios del ERP, cuánto bajó un tiempo de respuesta, cuánta cobertura de pruebas. Una sola cifra verificable ahí sube el CV de categoría. Formato sugerido: *«Reduje el tiempo de X de N s a M s»*.
2. **InventoryBox necesita ser verificable.** Un enlace a demo, repositorio o capturas convierte esas cifras en evidencia. Hoy el reclutador solo tiene tu palabra.
3. **Correo profesional.** `jsvanegas2014@gmail.com` funciona, pero un `sebastian.vanegas.dev@gmail.com` (o dominio propio) proyecta mejor. Si lo cambiás, actualizá los cuatro archivos.
4. **Ingeniería de Sistemas en pausa.** Si vas a retomarla, decilo («retoma prevista 20XX»); si no, dejalo tal cual — es honesto y no penaliza tanto como parece en el sector.
5. **Inglés B1.** Para vacantes remotas internacionales es el techo. Si estás subiendo de nivel, vale mencionarlo.
6. **Un CV por vacante.** Abrí el `.md`, reordená las viñetas para que las tres primeras de cada empleo respondan a la oferta, y volvé a exportar. No cambia el contenido, cambia el orden — y eso es lo que puntúa el ATS.

**Pendiente:** `HV_Sebastian_Vanegas_ATS.docx` (versión anterior, ya reemplazada) quedó abierto en Word y no se pudo borrar. Cerralo y eliminalo junto con el archivo temporal `~$_Sebastian_Vanegas_ATS.docx`.
