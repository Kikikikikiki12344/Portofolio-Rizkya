window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // tambah delay supaya loader lebih lama
  setTimeout(() => {
    loader.style.transition = "opacity 1s ease"; // fade out lebih smooth
    loader.style.opacity = 0;

    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 1000); // 1 detik sesuai fade
  }, 100); // durasi tampil loader tambahan 1.5 detik
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => observer.observe(card));

window.addEventListener("scroll", () => {
  AOS.refresh(); // refresh semua animasi
});
