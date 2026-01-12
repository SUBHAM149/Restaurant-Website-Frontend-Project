// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 2500);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ALIEN BACKGROUND PARTICLES
const canvas = document.getElementById("alien-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];
for (let i = 0; i < 80; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function animateDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(d => {
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = "#00bfff";
    ctx.fill();
    d.x += d.dx;
    d.y += d.dy;
    if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
    if (d.y < 0 || d.y > canvas.height) d.dy *= -1;
  });
  requestAnimationFrame(animateDots);
}
animateDots();
