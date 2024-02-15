const horaAtual = document.querySelector('p#hora-atual')
const dataAtual = document.querySelector('p#data')
const cidade = document.querySelector('p#local')
var timezone = "Europe/Paris"

moment.tz.setDefault(timezone)

function atualizaHora() {
    const hora = new Date()
    let horas = hora.getHours().toString().padStart(2, '0')
    let minutos = hora.getMinutes().toString().padStart(2, '0')
    let segundos = hora.getSeconds().toString().padStart(2, '0')
    let data = moment().tz(timezone).format("dddd")
    let dia = moment().tz(timezone).format("DD")
    let mes_get = moment().tz(timezone).format("MMMM")
    let ano = moment().tz(timezone).format("YYYY")

    const mundoTime = moment().tz(timezone).format("HH:mm:ss")
    horas = mundoTime.split(":")[0]
    minutos = mundoTime.split(":")[1]
    segundos = mundoTime.split(":")[2]

    horaAtual.textContent = `${horas}:${minutos}:${segundos}`

    switch (data) {
        case "Sunday":
            var sem = 'domingo'
            break
        case "Monday":
            var sem = 'segunda-feira'
            break
        case "Tuesday":
            var sem = 'terça-feira' 
            break
        case "Wednesday":
            var sem = 'quarta-feira'
            break
        case "Thursday":
            var sem = 'quinta-feira'
            break
        case "Friday":
            var sem = 'sexta-feira'
            break
        case "Saturday":
            var sem = 'sábado'
            break
    }
    switch (mes_get) {
        case "January":
            var mes = 'Janeiro'
            break
        case "February":
            var mes = 'Fevereiro'
            break
        case "March":
            var mes = "Março"
            break
        case "April":
            var mes = 'Abril'
            break
        case "May":
            var mes = 'Maio'
            break
        case "June":
            var mes = 'Junho'
            break
        case "July":
            var mes = 'Julho'
            break
        case "August":
            var mes = 'Agosto'
            break
        case "September":
            var mes = 'Setembro'
            break
        case "October":
            var mes = 'Outubro'
            break
        case "November":
            var mes = 'Novembro'
            break
        case "December":
            var mes = 'Dezembro'
            break
    }
    dataAtual.textContent = `${sem}, ${dia} de ${mes} de ${ano}`

}

function atualizaHoraMundo() {
    moment.tz.setDefault(timezone)
    atualizaHora()
}

setInterval(atualizaHora, 100)
atualizaHora()
atualizaHoraMundo()


function fullscreen() {
    var body = document.getElementById("body")
    var horariosSections = document.querySelectorAll(".horarios");
    var localMargin = document.querySelector("main")
    var icon = document.getElementById("fullscreen-icon");
    if (!document.fullscreenElement) {
        body.requestFullscreen().then(() => {
            document.body.style.backgroundColor = "black";
            horariosSections.forEach(section => {
                localMargin.style.margin = "200px 0px 0px 0px"
                section.style.display = "none";
                icon.innerText = 'close_fullscreen'
            });
        }).catch((err) => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen().then(() => {
            document.body.style.backgroundColor = "";
            horariosSections.forEach(section => {
                localMargin.style.margin = ""
                section.style.display = "flex";
                icon.innerText = 'open_in_full'
            });
        }).catch((err) => {
            console.log(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
        });
    }
}