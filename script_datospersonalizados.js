// Al cargar la página, recuperamos los datos de la torta
window.addEventListener("DOMContentLoaded", () => {
  const spanSize = document.getElementById("spanSize");
  const spanSabor = document.getElementById("spanSabor");
  const spanTematica = document.getElementById("spanTematica");
  const spanFrase = document.getElementById("spanFrase");

  if (spanSize && spanSabor && spanTematica && spanFrase) {
    const size = sessionStorage.getItem("size") || "";
    const sabor = sessionStorage.getItem("sabor") || "";
    const tematica = sessionStorage.getItem("tematica") || "";
    const frase = sessionStorage.getItem("frase") || "";

    // Mostramos en pantalla
    spanSize.textContent = size;
    spanSabor.textContent = sabor;
    spanTematica.textContent = tematica;
    spanFrase.textContent = frase;
  }
});

// Validando Form
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

// Función para confirmar el pedido
function confirmarPedido() {
  const nombre = document.getElementById("nombre").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const checkContraEntrega = document.getElementById("contraEntrega").checked;

  if (!nombre || !celular) {
    alert("Por favor ingresa tu nombre y número de celular.");
    return;
  }

  const size = sessionStorage.getItem("size") || "";
  const sabor = sessionStorage.getItem("sabor") || "";
  const tematica = sessionStorage.getItem("tematica") || "";
  const frase = sessionStorage.getItem("frase") || "";

  const metodoPago = checkContraEntrega ? "Contra entrega" : "No especificado";

  let mensaje =
    `Hola, soy ${nombre}.\n` +
    `Quiero saber si me pueden colaborar con la siguiente torta personalizada:\n\n` +
    `🎂 Tamaño: ${size}\n` +
    `🍰 Sabor: ${sabor}\n` +
    `🎨 Temática: ${tematica}\n` +
    `📝 Frase: ${frase}\n\n` +
    `Quedo pendiente, ¡Gracias!.`;

  const numeroPasteleria = "573138492636";
  const urlWhatsApp = `https://wa.me/${numeroPasteleria}?text=${encodeURIComponent(
    mensaje
  )}`;
  window.open(urlWhatsApp, "_blank");
}
