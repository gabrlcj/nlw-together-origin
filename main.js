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

// ADICIONAR SOMBRA AO HEADER DA PAGINA AO SCROLLAR
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})