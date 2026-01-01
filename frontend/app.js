const API_BASE = "http://127.0.0.1:8000"; // change later for prod

const slug = window.location.pathname.split("/").pop();

const imageEl = document.getElementById("art-image");
const nameEl = document.getElementById("art-name");
const meaningEl = document.getElementById("art-meaning");
const soundBtn = document.getElementById("sound-btn");
const audio = document.getElementById("audio");

fetch(`${API_BASE}/art/${slug}`)
    .then(res => {
        if (!res.ok) throw new Error("Artwork not found");
        return res.json();
    })
    .then(data => {
        imageEl.src = data.image_url;
        nameEl.textContent = data.name;
        meaningEl.textContent = data.meaning;

        if (data.sound_url) {
            audio.src = data.sound_url;
        } else {
            soundBtn.style.display = "none";
        }
    })
    .catch(() => {
        nameEl.textContent = "Artwork not found";
        meaningEl.textContent = "";
        soundBtn.style.display = "none";
    });

soundBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        soundBtn.textContent = "❚❚ Pause Sound";
    } else {
        audio.pause();
        soundBtn.textContent = "▶ Play Sound";
    }
});
