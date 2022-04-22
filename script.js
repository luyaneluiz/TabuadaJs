function Calcular() {
  const number = document.querySelector(".number").value;
  const tabuada = document.querySelector(".tabuada");
  var resultado = "";

  for (let count = 1; count <= 10; count++)
    resultado += number + " x " + count + " = " + number * count + "<br />";

  tabuada.innerHTML = resultado;
}
