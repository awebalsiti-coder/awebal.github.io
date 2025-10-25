const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Toggle navbar mobile
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Chiudi navbar se esci con mouse (desktop)
navMenu.addEventListener("mouseleave", () => {
  if(window.innerWidth > 768){
    navMenu.classList.remove("open");
  }
});

// Chiudi navbar mobile se clicchi fuori
document.addEventListener("click", (e) => {
  if(window.innerWidth <= 768 && navMenu.classList.contains("open")) {
    if(!navMenu.contains(e.target) && e.target !== menuToggle) {
      navMenu.classList.remove("open");
    }
  }
});

// Toggle dettagli singolo servizio con transizione fluida
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const details = btn.nextElementSibling;

    // Chiudi tutti gli altri box
    document.querySelectorAll(".details").forEach(d => {
      if(d !== details) {
        d.classList.remove("open");
      }
    });

    // Apri/chiudi solo questo box
    details.classList.toggle("open");
  });
});

// Scroll fluido con offset navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(!target) return;
    window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
    if(window.innerWidth <= 768) navMenu.classList.remove("open");
  });
});

// Aggiorna anno footer
document.getElementById("year").textContent = new Date().getFullYear();
