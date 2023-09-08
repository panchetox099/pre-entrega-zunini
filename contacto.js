const inputFecha = document.getElementById("fecha");
    inputFecha.min = new Date().toISOString().split("T")[0];




    const motivosSelect = document.getElementById('motivos');
    const motivosParrafo = document.getElementById('motivos-seleccionados');
  
    motivosSelect.addEventListener('change', () => {
      const opcionesSeleccionadas = Array.from(motivosSelect.selectedOptions).map(option => option.text);
      const motivos = opcionesSeleccionadas.join(', ');
      motivosParrafo.textContent = `Motivos seleccionados: ${motivos}`;
    });



    const motivos = ['Cambios de prendas', 'Olvide mi usuario y contraseña', 'Como comprar', 'Seguimiento de pedido', 'Otros'];
    const motivosActualizadosParrafo = document.getElementById('motivos-actualizados');
  
    function agregarMotivo() {
      const nuevoMotivo = document.getElementById('nuevo-motivo').value;
      motivos.unshift(nuevoMotivo);
      motivosActualizadosParrafo.textContent = `Motivos actualizados: ${motivos.join(', ')}`;
    }





    const correos = ['correo1@example.com', 'correo2@example.com', 'correo3@example.com'];
  const resultadoEmail = document.getElementById('resultado-email');

  function verificarEmail() {
    const nuevoEmail = document.getElementById('nuevo-email').value;
    const existe = correos.includes(nuevoEmail);

    if (existe) {
      resultadoEmail.textContent = `El correo ${nuevoEmail} ya está registrado.`;
    } else {
      resultadoEmail.textContent = `El correo ${nuevoEmail} no está registrado.`;
    }
  }





  function verificarNumero() {
    const numero = document.getElementById('numero').value;
    const contieneCero = numero.includes('0');
    
    if (contieneCero) {
      resultadoNumero.textContent = `El número contiene el dígito 0.`;
    } else {
      resultadoNumero.textContent = `El número no contiene el dígito 0.`;
    }
  }
  
  const resultadoNumero = document.getElementById('resultado-numero');

   // Obtener una referencia al formulario y al elemento donde se mostrará el mensaje
   var formulario = document.getElementById("loginForm");
   var mensajeDiv = document.getElementById("mensaje");

   // Función para manejar el envío del formulario
   function iniciarSesion(event) {
       event.preventDefault(); // Prevenir el envío del formulario

       // Obtener los valores de los campos de usuario y contraseña
       var username = formulario.elements["username"].value;
       var password = formulario.elements["password"].value;

       // Verificar si los valores son válidos (aquí puedes implementar tu lógica de autenticación)
       if (username === "usuario" && password === "contraseña") {
           // Mostrar un mensaje de bienvenida
           mensajeDiv.textContent = "¡Bienvenido, " + username + "!";
       } else {
           // Mostrar un mensaje de error
           mensajeDiv.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
       }
   }