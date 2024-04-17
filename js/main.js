/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.service-card'
  },
  animation: {
    duration: 300
  },
  load: {
    filter: '.autos'
  }
});

/* Link active work */

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1500,
  delay: 500,
  // reset:true,
})

sr.reveal(`.home__container`)
sr.reveal(`.info__mision, .info__vision, .contain__nosotros, .nosotros__logo`, { delay: 300, origin: 'bottom' })
sr.reveal(`.work__container`, { delay: 100 })
sr.reveal(`.paquetes__card`, { delay: 100, origin: 'bottom' })
sr.reveal(`.card__opiniones`, { delay: 100, origin: 'bottom' })
sr.reveal(`.testimonial__container`, { delay: 100 })
sr.reveal(`.container__form`, { delay: 100, origin: 'bottom' })


// Obtener referencias a elementos del DOM
const modal = document.getElementById("modal");
const imagenes = document.querySelectorAll(".galeria__img img");
const modalContenido = document.getElementById("imagen-ampliada");
const cerrarModal = document.querySelector(".cerrar");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const menu = document.getElementById("menu");

// Mostrar modal con la imagen ampliada
function abrirModal(src) {
    modal.style.display = "flex";
    modalContenido.src = src;
    document.body.style.overflow = "hidden";
    menu.style.display = "none";
}

// Cerrar modal
cerrarModal.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    menu.style.display = "unset";
}

// Eventos para avanzar y retroceder en la galería
let imagenActual = 0;
imagenes.forEach((imagen, index) => {
    imagen.onclick = () => {
        abrirModal(imagen.src);
        imagenActual = index;
    };
});

anterior.onclick = () => {
    if (imagenActual > 0) {
        abrirModal(imagenes[imagenActual - 1].src);
        imagenActual--;
    }
};

siguiente.onclick = () => {
    if (imagenActual < imagenes.length - 1) {
        abrirModal(imagenes[imagenActual + 1].src);
        imagenActual++;
    }
};

// Cerrar modal haciendo clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}