document.getElementById("ingresar").onclick = function () {
  const selector1 = document.getElementById("selector1").value;
  const selector2 = document.getElementById("selector2").value;
  const selector3 = document.getElementById("selector3").value;

  const password = selector1 + selector2 + selector3;
  let mensaje;

  if (password === "911") {
    mensaje = "password 1 correcto";
  } else if (password === "714") {
    mensaje = "password 2 es correcto";
  } else {
    mensaje = "password incorrecto";
  }

  document.getElementById("resultado").innerHTML = mensaje;
};
