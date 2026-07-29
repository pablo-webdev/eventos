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
  const toggleBtn = document.getElementById("menuToggleHero");
  const menuInterno = document.getElementById("menuInterno");

  if (toggleBtn && menuInterno) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuInterno.classList.toggle("active");
    });

    // Cerrar el menú automáticamente al dar clic/toque en cualquier enlace
    menuInterno.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuInterno.classList.remove("active");
      });
    });

    // Opcional: Cerrar menú si el usuario toca en cualquier otra parte fuera de él
    document.addEventListener("click", (e) => {
      if (!toggleBtn.contains(e.target) && !menuInterno.contains(e.target)) {
        menuInterno.classList.remove("active");
      }
    });
  }

  // 3. BOTÓN SCROLL TO TOP
  const goTopBtn = document.querySelector(".go-top-cont");

  if (goTopBtn) {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY || document.documentElement.scrollTop;

      // Muestra si pasas de 100px, pero solo se oculta si regresas casi hasta arriba (< 20px)
      if (scrollY > 100) {
        goTopBtn.classList.add("show");
      } else if (scrollY < 20) {
        goTopBtn.classList.remove("show");
      }
    });

    goTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
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
