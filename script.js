var PlayPause = document.querySelector("#playPause i");
var btnPlayPause = document.querySelector("#playPause");
function changeStatu() {
    if (PlayPause.classList == `fa-sharp fa-solid fa-circle-play`) {
        PlayPause.classList = `fa-sharp fa-solid fa-circle-pause`;
        btnPlayPause.setAttribute("data-bs-slide", "pause");
        btnPlayPause.setAttribute("aria-pressed", "false");
    }
    else if (PlayPause.classList == `fa-sharp fa-solid fa-circle-pause`) {
        PlayPause.classList = `fa-sharp fa-solid fa-circle-play`;
        btnPlayPause.setAttribute("data-bs-slide", "play");
        btnPlayPause.setAttribute("aria-pressed", "true");
    }
}