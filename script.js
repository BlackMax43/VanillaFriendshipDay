
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");
  const surpriseText = document.getElementById("surprise-text");
  const surpriseBtn = document.getElementById("surprise-btn");
  const themeToggle = document.getElementById("theme-toggle");

  // Intro screen delay
  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
  }, 2500);

  // Surprise button
  surpriseBtn.addEventListener("click", () => {
    if (surpriseText.style.display === "block") {
      surpriseText.style.display = "none";
    } else {
      surpriseText.style.display = "block";
      launchConfetti();
    }
  });

  // Theme toggle
  const themes = ["", "dark", "pink"];
  let currentTheme = 0;
  themeToggle.addEventListener("click", () => {
    document.body.classList.remove(themes[currentTheme]);
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.classList.add(themes[currentTheme]);
  });
});

// Simple confetti effect using emojis
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement("div");
    conf.textContent = "🎉";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-2em";
    conf.style.fontSize = "2rem";
    conf.style.animation = "fall 2s linear forwards";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 2000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
