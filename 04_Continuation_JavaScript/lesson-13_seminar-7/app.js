const playBtn = document.querySelector(".play");
const videoEl = document.querySelector(".player");
const progresEl = document.querySelector(".progres");
const time = document.querySelector(".current-Time");
const vol = document.querySelector(".volume")


progresEl.value = 0;
playBtn.addEventListener("click", () => {
    // videoEl.play();
    if (videoEl.paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
})
videoEl.addEventListener("play", function() {
// Запуск функции для обновления прогрессбара
    setInterval(updateProgressBar, 100);
});
function updateProgressBar() {
    const currentTime = videoEl.currentTime;
    const duration = videoEl.duration;

// Вычисление процента выполнения видео
    const percent = (currentTime / duration) * 100;
    time.textContent = Math.ceil(currentTime);

// Обновление стиля прогрессбара
    progresEl.value = percent;
}

vol.addEventListener("input", function () {
    videoEl.volume = vol.value;
});