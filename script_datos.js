// Al cargar la página, recuperamos la información del sessionStorage
window.addEventListener("DOMContentLoaded", () => {
  const imagen = sessionStorage.getItem("productImage");
  const nombre = sessionStorage.getItem("productName");
  const descripcion = sessionStorage.getItem("productDescription");

  // Asignamos los valores a los elementos HTML correspondientes
  if (imagen && nombre && descripcion) {
    document.getElementById("productImage").src = imagen;
    document.getElementById("productName").textContent = nombre;
    document.getElementById("productDescription").textContent = descripcion;
  }
});

// Validando formulario
document.addEventListener("DOMContentLoaded", function () {
  // Validación en tiempo real para el campo de nombre
  const nombreInput = document.getElementById("nombre");
  nombreInput.addEventListener("input", function () {
    const value = nombreInput.value;
    let errorSpan = document.getElementById("errorNombre");
    if (!errorSpan) {
      errorSpan = document.createElement("span");
      errorSpan.id = "errorNombre";
      errorSpan.style.color = "red";
      errorSpan.style.fontSize = "12px";
      // Insertamos el span justo después del input
      nombreInput.parentNode.insertBefore(errorSpan, nombreInput.nextSibling);
    }

    // Si el campo tiene menos de 4 letras
    if (value.length < 4) {
      errorSpan.innerText = "Debe contener mínimo 4 letras";
    }
    // Si el valor contiene caracteres que no sean letras o espacios
    else if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
      errorSpan.innerText = "Solo se pueden ingresar letras";
    } else {
      errorSpan.innerText = "";
    }
  });

  // Validación en tiempo real para el campo de teléfono
  const celularInput = document.getElementById("celular");
  celularInput.addEventListener("input", function () {
    const value = celularInput.value;
    let errorSpan = document.getElementById("errorCelular");
    if (!errorSpan) {
      errorSpan = document.createElement("span");
      errorSpan.id = "errorCelular";
      errorSpan.style.color = "red";
      errorSpan.style.fontSize = "12px";
      // Insertamos el span justo después del input
      celularInput.parentNode.insertBefore(errorSpan, celularInput.nextSibling);
    }

    // Si se ingresa algún carácter que no sea un dígito
    if (!/^\d*$/.test(value)) {
      errorSpan.innerText = "Solo se pueden ingresar números";
    }
    // Si se excede la longitud de 10 dígitos
    else if (value.length > 10) {
      errorSpan.innerText = "Máximo 10 números";
    } else {
      errorSpan.innerText = "";
    }
  });
});

// Funcion de envio a WhatsApp
function confirmarPedido() {
  // Capturar datos del producto (estos elementos deben estar llenados en la página)
  var productName = document.getElementById("productName").innerText;
  var productDescription =
    document.getElementById("productDescription").innerText;
  var productImage = document.getElementById("productImage").src;

  // Capturar datos del formulario
  var nombre = document.getElementById("nombre").value.trim();
  var celular = document.getElementById("celular").value.trim();
  var personas = document.getElementById("personas").value.trim();

  // Validar que el usuario haya ingresado los datos
  if (!nombre || !celular) {
    alert("Por favor, completa tus datos de contacto.");
    return;
  }

  var contraEntrega = document.getElementById("contraEntrega").checked;
  var metodoPago =
    "Método de Pago: " + (contraEntrega ? "Contra entrega" : "No especificado");

  // Construir el mensaje para WhatsApp
  var mensaje =
    "Hola! Soy " +
    nombre +
    ", estoy interesado en el *clásico:* '" +
    productName +
    "', es para " +
    personas +
    ". Por último, quiero saber el precio. Muchas gracias.";

  var numeroWhatsApp = "573045354056";

  // Construir URL para WhatsApp, codificando el mensaje
  var url =
    "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

  // Abrir WhatsApp en una nueva pestaña
  window.open(url, "_blank");
}
