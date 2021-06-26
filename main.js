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
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// SCROLL REVEAL mostra elementos ao dar scroll na pagina
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// BOTAO BACK TO TOP 
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

    if (window.scrollY >= 750) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// MENU ATIVO CONFORME A SEÇÃO VISIVEL NA PAGINA
const sections = document.querySelectorAll('main section[id]')

function activateCurrentSection() {
    const checkpoint  = window.pageYOffset + (window.innerHeight / 8) * 4
    
    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const startPoint = checkpoint >= sectionTop
        const endPoint = checkpoint <= sectionTop + sectionHeight

        if(startPoint && endPoint) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}

// EVENTOS DA PAGINA
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activateCurrentSection()
})