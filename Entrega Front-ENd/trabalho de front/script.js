function obterLocalizacao() {
  // Simulação de obtenção da localização
  const latitude = 3; // Exemplo: latitude
  const longitude = -1.2; // Exemplo: longitude
  
  // Atualizar a distância até o pet
  calcularDistancia(latitude, longitude);
  
  // Atualizar a última localização registrada
  exibirUltimaLocalizacao(latitude, longitude);
}

function calcularDistancia(latitude, longitude) {
  // Simulação de cálculo da distância
  const distancia = 2.5; // Exemplo: distância em quilômetros
  
  // Exibir a distância na página
  document.getElementById("distancia").textContent = `${distancia.toFixed(2)} km`;
}

function exibirUltimaLocalizacao(latitude, longitude) {
  // Exibir a última localização registrada na página
  document.getElementById("ultima-localizacao").textContent = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
}
function updateBatteryPercentage(percentage) {
  var batteryPercentageElement = document.getElementById("batteryPercentage");
  batteryPercentageElement.textContent = percentage;
}

setInterval(function() {
  var batteryPercentage = Math.floor(Math.random() * 101); // Gera um número aleatório entre 0 e 1000
  updateBatteryPercentage(batteryPercentage);
}, 5000); 
