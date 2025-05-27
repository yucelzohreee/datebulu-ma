const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const images = document.getElementById("images");
const container = document.querySelector(".buttons");

let hasMoved = false;
let moveInterval = null;

document.addEventListener("mousemove", (e) => {
  if (hasMoved) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const rect = noBtn.getBoundingClientRect();
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const distance = Math.hypot(mouseX - btnX, mouseY - btnY);

  if (distance < 100) {
    moveNoButton();
    hasMoved = true;
  }
});

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  moveInterval = setInterval(() => {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }, 500);
}

yesBtn.addEventListener("click", () => {
  images.classList.add("zoomed");        // Resimleri yaklaştır
  clearInterval(moveInterval);           // Hayır hareketini durdur
  noBtn.style.left = "auto";             // Yerini sıfırla
  noBtn.style.top = "auto";

  fireworkBurst();                       // Havai fişek
});

function fireworkBurst() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() >= end) {
      clearInterval(interval);
      return;
    }

    confetti({
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      particleCount: 60,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
      zIndex: 1000,
    });
  }, 250);
}
