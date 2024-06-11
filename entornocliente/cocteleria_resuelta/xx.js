document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario');

  // Botón “Guardar”
  function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const dni = document.getElementById('dni').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Validar que al menos un campo tenga datos antes de guardar
    if (nombre || apellidos || dni || telefono || email) {
      const datos = {
        nombre: nombre,
        apellidos: apellidos,
        dni: dni,
        telefono: telefono,
        email: email
      };

      // Convertir los datos a formato JSON y guardar en localStorage
      localStorage.setItem('datosPersonales', JSON.stringify(datos));

      alert('Datos guardados correctamente.');
    } else {
      alert('Por favor, ingresa al menos un dato para guardar.');
    }
  }

  // Botón “Recuperar”
  function recuperarDatos() {
    const datosGuardados = localStorage.getItem('datosPersonales');

    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);

      // Rellenar el formulario con los datos recuperados
      document.getElementById('nombre').value = datos.nombre;
      document.getElementById('apellidos').value = datos.apellidos;
      document.getElementById('dni').value = datos.dni;
      document.getElementById('telefono').value = datos.telefono;
      document.getElementById('email').value = datos.email;

      alert('Datos recuperados correctamente.');
    } else {
      alert('No hay datos almacenados para recuperar.');
    }
  }

  // Botón “Cancelar”
  function limpiarFormulario() {
    formulario.reset();
  }

  // Botón “Borrar almacenamiento”
  function borrarAlmacenamiento() {
    localStorage.removeItem('datosPersonales');
    alert('Almacenamiento borrado correctamente.');
  }

  // Asociar funciones a eventos de los botones
  document.querySelector('button[type="button"][onclick="guardarDatos"]').addEventListener('click', guardarDatos);
  document.querySelector('button[type="button"][onclick="recuperarDatos"]').addEventListener('click', recuperarDatos);
  document.querySelector('button[type="button"][onclick="limpiarFormulario"]').addEventListener('click', limpiarFormulario);
  document.querySelector('button[type="button"][onclick="borrarAlmacenamiento"]').addEventListener('click', borrarAlmacenamiento);
});
