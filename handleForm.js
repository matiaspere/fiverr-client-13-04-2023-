function validateAndSendForm() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  let valid = true;

  if (!nombre.value) {
    nombre.classList.add("error");
    const nombreError = document.getElementById("nombre-error");
    nombreError.innerHTML = "Por favor ingrese su nombre";
    valid = false;
  } else {
    nombre.classList.remove("error");
    const nombreError = document.getElementById("nombre-error");
    nombreError.innerHTML = "";
  }

  if (!email.value) {
    email.classList.add("error");
    const emailError = document.getElementById("email-error");
    emailError.innerHTML = "Por favor ingrese su correo electrónico";
    valid = false;
  } else {
    email.classList.remove("error");
    const emailError = document.getElementById("email-error");
    emailError.innerHTML = "";
  }

  if (!mensaje.value) {
    mensaje.classList.add("error");
    const mensajeError = document.getElementById("mensaje-error");
    mensajeError.innerHTML = "Por favor ingrese un mensaje";
    valid = false;
  } else {
    mensaje.classList.remove("error");
    const mensajeError = document.getElementById("mensaje-error");
    mensajeError.innerHTML = "";
  }

  return valid;
}

function sendForm() {
  const formValid = validateAndSendForm();
  console.log(formValid);

  if (formValid) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    
    const button = document.getElementById("send-button");
    button.style.backgroundColor = "gray";
    button.style.color = "white";
    button.disabled = true;

    const templateParams = {
      from_name: nombre,
      reply_to: email,
      message: mensaje,
    };

    emailjs.send("service_xtgwjph","template_fll4itw", templateParams).then(
      function (response) {
        document.getElementById("status-message").style.display = "block";
        document.getElementById("send-button").style.display = "none";
      },
      function (error) {
        alert("Ha ocurrido un error al enviar el mensaje: " + error.text);
      }
    );
  }
}
