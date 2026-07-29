/* ==========================================================================
   MIDNIGHT SOUND - MAIN JAVASCRIPT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. ANIMACIÓN DE TEXTO CON TYPED.JS (HERO)
  if (typeof Typed !== "undefined" && document.querySelector(".typed")) {
    new Typed(".typed", {
      strings: [
        '<i class="texto-pantalla">Bodas Inolvidables</i>',
        '<i class="texto-pantalla">XV Años Espectaculares</i>',
        '<i class="texto-pantalla">Eventos Corporativos</i>',
        '<i class="texto-pantalla">Fiestas Privadas</i>',
      ],
      typeSpeed: 75,
      startDelay: 300,
      backSpeed: 75,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1500,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: "|",
      contentType: "html",
    });
  }

  // 2. MENÚ RESPONSIVE DENTRO DE LA TARJETA HERO
  const toggleBtn = document.querySelector(".menu-toggle-hero");
  const menuInterno = document.querySelector(".menu-interno");

  if (toggleBtn && menuInterno) {
    toggleBtn.addEventListener("click", () => {
      menuInterno.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    menuInterno.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuInterno.classList.remove("active");
      });
    });
  }

  // 3. BOTÓN SCROLL TO TOP
  const goTopBtn = document.querySelector(".go-top-cont");

  if (goTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        goTopBtn.style.display = "block";
      } else {
        goTopBtn.style.display = "none";
      }
    });

    goTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // 4. DUPLICAR ELEMENTOS DEL CARRUSEL DE TESTIMONIOS (EFECTO INFINITO)
  const tickerTrack = document.querySelector(".ticker-track");
  if (tickerTrack) {
    const cards = Array.from(tickerTrack.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      tickerTrack.appendChild(clone);
    });
  }
});
