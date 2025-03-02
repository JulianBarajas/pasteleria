// Funcion de scroll active
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scroll-to-top");

  // Mostrar u ocultar el botón según el scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      scrollButton.style.opacity = "1";
      scrollButton.style.visibility = "visible";
    } else {
      scrollButton.style.opacity = "0";
      scrollButton.style.visibility = "hidden";
    }
  });

  // Agregar el desplazamiento suave al hacer clic
  scrollButton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Aplica el desplazamiento suave
    });
  });
});

function abrirModalTorta() {
  document.getElementById("modalTorta").style.display = "flex";
}

// Cierra el modal
function cerrarModalTorta() {
  document.getElementById("modalTorta").style.display = "none";
}

// Botón de cierre (X) - solo existe en index.html
const closeModalBtn = document.getElementById("closeModalTorta");
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", cerrarModalTorta);
}

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener("click", function (event) {
  const modal = document.getElementById("modalTorta");
  if (event.target === modal) {
    cerrarModalTorta();
  }
});

/**
 * Al hacer clic en "Finalizar compra", guardamos los datos en sessionStorage
 * y redirigimos a la página "datos_personalizados.html".
 */
function finalizarTorta() {
  const size = document.getElementById("tortaSize").value;
  const sabor = document.getElementById("tortaSabor").value;
  const tematica = document.getElementById("tortaTematica").value;
  const frase = document.getElementById("tortaFrase").value;

  // Guardar datos en sessionStorage
  sessionStorage.setItem("size", size);
  sessionStorage.setItem("sabor", sabor);
  sessionStorage.setItem("tematica", tematica);
  sessionStorage.setItem("frase", frase);

  // Redirigir
  window.location.href = "datos_personalizados.html";
}

// script_index.js (o la parte correspondiente en tu JS)
function ordenarAhora(button) {
  // 'button.parentElement' es el contenedor del producto
  const producto = button.parentElement;

  // Obtener la información del producto
  const imagen = producto.querySelector("img").src;
  const nombre = producto.querySelector("h3").textContent;
  const descripcion = producto.querySelector("p").textContent;

  // Guardar los datos en sessionStorage
  sessionStorage.setItem("productImage", imagen);
  sessionStorage.setItem("productName", nombre);
  sessionStorage.setItem("productDescription", descripcion);

  // Redirigir a datos.html
  window.location.href = "datos.html";
}
