const progressTrack = document.querySelector(".progress-track");
const progressFill = document.getElementById("progress-fill");
const increaseButton = document.getElementById("increase-btn");
const resetButton = document.getElementById("reset-btn");

let progressValue = 0;

function updateProgress(value) {
    progressValue = Math.min(Math.max(value, 0), 100);
    progressFill.style.width = progressValue + "%";
    progressFill.textContent = progressValue + " %";
    progressTrack.setAttribute("aria-valuenow", progressValue);
}

increaseButton.addEventListener("click", () => {
    updateProgress(progressValue + 10);
});

resetButton.addEventListener("click", () => {
    updateProgress(0);
});

updateProgress(progressValue);
