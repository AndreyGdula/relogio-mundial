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
                section.style.display = "grid";
                icon.innerText = 'open_in_full'
            });
        }).catch((err) => {
            console.log(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
        });
    }
}