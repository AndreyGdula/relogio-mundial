function fullscreen() {
    var body = document.getElementById("body")
    var horariosSections = document.querySelectorAll(".horarios");
    var main = document.querySelector("main")
    var icon = document.getElementById("fullscreen-icon");

    if (!document.fullscreenElement) {
        body.requestFullscreen().then(() => {
            document.body.style.backgroundColor = "black";
            main.style.position = "absolute"
            main.style.top = "50%"
            main.style.left = "50%"
            main.style.transform = 'translate(-50%, -60%)'
            horariosSections.forEach(section => {
                section.style.display = "none";
                icon.innerText = 'close_fullscreen'
                if (window.innerWidth <= 768) {
                    body.style.rotate = "90deg"
                    main.style.margin = "0px"
                    icon.style.margin = "150px 0px"
                    main.style.transform = 'translate(-50%, -25%)'
                }
            });
        }).catch((err) => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen().then(() => {
            document.body.style.backgroundColor = "";
            main.style.margin = "125px 0px"
            main.style.position = ""
            main.style.transform = ''
            horariosSections.forEach(section => {
                section.style.display = "grid";
                icon.innerText = 'open_in_full'
                body.style.rotate = ""
                icon.style.margin = ""
            });
        }).catch((err) => {
            console.log(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
        });
    }
}