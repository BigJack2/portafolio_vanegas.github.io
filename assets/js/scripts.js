function calcularEdad(anioNacimiento) {
  const anioActual = new Date().getFullYear();
  return anioActual - anioNacimiento;
}

// Establece el año de nacimiento y calcula la edad
const anioNacimiento = 1993;
const edad = calcularEdad(anioNacimiento);

// Inserta la edad en el elemento HTML con id "edad"
document.getElementById('edad').textContent = edad;
