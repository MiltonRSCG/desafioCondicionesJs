let cantidades = document.querySelectorAll(".cantidad");
let imagenes = document.querySelectorAll(".item img");
let resultado = document.getElementById("resultado");

for (var i = 0; i < imagenes.length; i++) {
  (function (index) {
    imagenes[index].addEventListener("click", function () {
      var input = cantidades[index];
      if (input.value === "") {
        input.value = 1;
      } else {
        input.value = parseInt(input.value) + 1;
      }
      actualizarTotal();
    });
  })(i);
}

function actualizarTotal() {
  var total = 0;
  for (var j = 0; j < cantidades.length; j++) {
    total += parseInt(cantidades[j].value) || 0;
  }
  if (total > 10) {
    resultado.textContent = "Llevas demasiados stickers";
  } else {
    resultado.textContent = "Llevas " + total + " stickers";
  }
}
