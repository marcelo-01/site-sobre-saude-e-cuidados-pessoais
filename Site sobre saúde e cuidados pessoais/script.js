// Menu expansivo
document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("menu-fechado")) {
      menu.classList.remove("menu-fechado");
      menu.classList.add("menu-aberto");
    } else {
      menu.classList.remove("menu-aberto");
      menu.classList.add("menu-fechado");
    }
  });
  
  // Calculadora de IMC
  document.getElementById("formImc").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      var imc = peso / (altura * altura);
      var resultado = "";
  
      if (imc < 18.5) {
        resultado = "Baixo peso";
      } else if (imc < 24.9) {
        resultado = "Peso normal";
      } else if (imc < 29.9) {
        resultado = "Sobrepeso";
      } else {
        resultado = "Obesidade";
      }
  
      document.getElementById("resultadoIMC").textContent = "Seu IMC é " + imc.toFixed(2) + ". " + resultado;
    } else {
      document.getElementById("resultadoIMC").textContent = "Por favor, insira valores válidos.";
    }
  });
  