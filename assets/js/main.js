// Reveal text on scroll
const whispers = document.querySelectorAll(".whisper");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.4 }
);

whispers.forEach((w) => observer.observe(w));

// Music control
const playBtn = document.getElementById("play");
const song = document.getElementById("song");
let playing = false;

playBtn.addEventListener("click", () => {
  if (!playing) {
    song.play();
    playBtn.textContent = "Pause the night";
  } else {
    song.pause();
    playBtn.textContent = "Play the night";
  }
  playing = !playing;
});
