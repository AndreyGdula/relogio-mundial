function fullscreen() {
    var body = document.getElementById("body")
    var horariosSections = document.querySelectorAll(".horarios");
    var main = document.querySelector("main")
    var icon = document.getElementById("fullscreen-icon");
    var h1 = document.querySelector("h1#full")

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
                    let marginHeight = window.innerHeight - 80
                    let marginWidth = window.innerWidth - 80

                    main.style.rotate = "90deg"
                    main.style.margin = "0px"
                    main.style.transform = 'translate(-60%, 65%)'

                    h1.style.display = 'block'
                    icon.style.marginTop = marginHeight + 'px'
                    icon.style.marginLeft = marginWidth + 'px'
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
            main.style.transform = ""
            h1.style.display = ""
            horariosSections.forEach(section => {
                section.style.display = "grid";
                icon.innerText = 'open_in_full'
                main.style.rotate = ""
                icon.style.margin = ""
            });
        }).catch((err) => {
            console.log(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
        });
    }
}