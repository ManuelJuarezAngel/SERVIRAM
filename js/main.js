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

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay:700})
sr.reveal(`.home__social, .home__scroll`, {delay:900, origin:'bottom'})
sr.reveal(`.about__container`, {delay:100})
sr.reveal(`.frontend`, {delay:100})
sr.reveal(`.designer`, {delay:200})
sr.reveal(`.android`, {delay:300})
sr.reveal(`.services__container`, {delay:100})
sr.reveal(`.work__container`, {delay:100})
sr.reveal(`.testimonial__container`, {delay:100})
sr.reveal(`.contact__container`, {delay:100, origin:'bottom'})

