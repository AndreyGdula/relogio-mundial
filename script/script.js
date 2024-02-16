const horaAtual = document.querySelector('p#hora-atual')
const dataAtual = document.querySelector('p#data')
const cidade = document.querySelector('p#local')

function initMap() {}

function atualizaHora() {
    const hora = new Date()
    let horas = hora.getHours().toString().padStart(2, '0')
    let minutos = hora.getMinutes().toString().padStart(2, '0')
    let segundos = hora.getSeconds().toString().padStart(2, '0')
    let data = hora.getDay()
    let dia = hora.getDate().toString()
    let mes_get = hora.getMonth()
    let ano = hora.getFullYear().toString()
    horaAtual.textContent = `${horas}:${minutos}:${segundos}`

    switch (data) {
        case 0:
            var sem = 'domingo'
            break
        case 1:
            var sem = 'segunda-feira'
            break
        case 2:
            var sem = 'terça-feira' 
            break
        case 3:
            var sem = 'quarta-feira'
            break
        case 4:
            var sem = 'quinta-feira'
            break
        case 5:
            var sem = 'sexta-feira'
            break
        case 6:
            var sem = 'sábado'
            break
    }
    switch (mes_get) {
        case 0:
            var mes = 'Janeiro'
            break
        case 1:
            var mes = 'Fevereiro'
            break
        case 2:
            var mes = "Março"
            break
        case 3:
            var mes = 'Abril'
            break
        case 4:
            var mes = 'Maio'
            break
        case 5:
            var mes = 'Junho'
            break
        case 6:
            var mes = 'Julho'
            break
        case 7:
            var mes = 'Agosto'
            break
        case 8:
            var mes = 'Setembro'
            break
        case 9:
            var mes = 'Outubro'
            break
        case 10:
            var mes = 'Novembro'
            break
        case 11:
            var mes = 'Dezembro'
            break
    }
    dataAtual.textContent = `${sem}, ${dia} de ${mes} de ${ano}`

    // Localozação
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
      
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(latitude, longitude);
      
        geocoder.geocode({ 'latLng': latLng }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              var city = results[0].address_components[3].long_name;
              cidade.innerHTML = `<span class="material-symbols-outlined">location_on</span> ${city}`
            } else {
              console.log("Não foi possível obter a cidade do usuário.");
            }
          } else {
            console.log("Erro ao obter a localização do usuário: " + status);
          }
        });
      });
}

// Atualiza a hora a cada segundo
setInterval(atualizaHora, 100)

// Inicializa a hora com o horário atual
atualizaHora()