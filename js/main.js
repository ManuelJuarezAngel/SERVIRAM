/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.service-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

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

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin:'top',
  distance: '50px',
  duration:1500,
  delay: 500,
  // reset:true,
})

sr.reveal(`.home__container`)
sr.reveal(`.info__mision, .info__vision, .contain__nosotros, .nosotros__logo`, {delay:300, origin:'bottom'})
sr.reveal(`.work__container`, {delay:100})
sr.reveal(`.paquetes__card`, {delay:100, origin:'bottom'})
sr.reveal(`.card__opiniones`, {delay:100, origin:'bottom'})
sr.reveal(`.testimonial__container`, {delay:100})
sr.reveal(`.container__form`, {delay:100, origin:'bottom'})

