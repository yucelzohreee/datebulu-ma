const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const images = document.getElementById("images");
const container = document.querySelector(".buttons");

let hasMoved = false;
let moveInterval = null;

// Site yüklendikten 1 saniye sonra Hayır butonunu hareket ettir
window.addEventListener("load", () => {
  setTimeout(() => {
    moveNoButton();
    hasMoved = true;
  }, 1000); // 1000 ms = 1 saniye
});

function moveNoButton() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  moveInterval = setInterval(() => {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }, 200); // 👈 Hızlandırmak için 500 yerine 200 milisaniye yaptık
}


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
  noBtn.style.display = "none";          // 👈 HAYIR butonunu gizle
  fireworkBurst();                       // Havai fişek
});



function fireworkBurst() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;
launchHearts(); // ❤️ Kalpler

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

function launchHearts() {
  const container = document.getElementById("hearts-container");

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = `${Math.random() * 100 - 50}%`;

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000); // Kalp yok olur
  }
}
