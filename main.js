// ----------------------------- EFEITO DE ABRIR O MENU TOGGLE ------------------------
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

// ------------------ EFEITO DE FECHAR O TOGGLE DENTRO DO MENU MOBILE -------------------
const links = document.querySelectorAll('li .title')

for(const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// UTILIZANDO BIBLIOTECA SWIPER, EFEITO CAROUSEL, SLIDER
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

// SCROLL REVEAL mostra elementos ao dar scroll na pagina
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 680,
    reset: true
})

scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    #footer .brand, #footer .icon-box
    `,
 { interval: 100 }
)

// ADICIONAR SOMBRA AO HEADER DA PAGINA AO SCROLLAR
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// BOTAO BACK TO TOP 
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 750) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}


window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
})