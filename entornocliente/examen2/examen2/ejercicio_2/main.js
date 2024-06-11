document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario');

function guardarDatos() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const dni = document.getElementById("dni").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;

  // Validar los campos (puedes agregar lógica de validación aquí)
  if (nombre || apellidos || dni || telefono || email) {
    const datos = {
      nombre: nombre,
      apellidos: apellidos,
      dni: dni,
      telefono: telefono,
      email: email,
    };

    // Guardar los datos en localStorage en formato JSON
    localStorage.setItem("datosPersonales", JSON.stringify(datos));

    alert("Datos guardados");
  } else {
    alert("ingresa al menos un dato para guardar");
  }
}

function recuperarDatos() {
  // la constante aqui se llamará (formulario)

  const datosGuardados = localStorage.getItem("datosPersonales");
  // la constante para los guardar los datos se llamará (datosGuardados)

  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    document.getElementById("nombre").value = datos.nombre;
    document.getElementById("apellidos").value = datos.apellidos;
    document.getElementById("dni").value = datos.dni;
    document.getElementById("telefono").value = datos.telefono;
    document.getElementById("email").value = datos.email;

    alert("Datos recuperados");
  } else {
    alert("No hay datos almacenados.");
  }
}

function limpiarFormulario() {
  // Aqui va otra constante llamada (formulario)
  formulario.reset();

  // Y con la siguiente orden borras todo el formulario (Es una sola linea y un solo método el usado aquí)
}

function borrarAlmacenamiento() {
  localStorage.removeItem('datosPersonales');
  alert('Almacenamiento borrado correctamente.');

}
document.querySelector('button[type="button"][onclick="guardarDatos"]').addEventListener('click', guardarDatos);
document.querySelector('button[type="button"][onclick="recuperarDatos"]').addEventListener('click', recuperarDatos);
document.querySelector('button[type="button"][onclick="limpiarFormulario"]').addEventListener('click', limpiarFormulario);
document.querySelector('button[type="button"][onclick="borrarAlmacenamiento"]').addEventListener('click', borrarAlmacenamiento);

});
