document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + tab).classList.add("active");
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");

document.querySelectorAll(".img-zoom-wrap").forEach((wrap) => {
  wrap.addEventListener("click", () => {
    const img = wrap.querySelector("img");
    lightboxImg.src = img.src;
    lightbox.classList.add("open");
  });
});

lightbox.querySelector(".lightbox-backdrop").addEventListener("click", () => {
  lightbox.classList.remove("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.classList.remove("open");
});
