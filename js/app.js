const body = document.querySelector('body')
const topBtn = document.querySelector('.top')
body.classList.add('scroll')
window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 100) {
        body.classList.add('scroll')
    } else {
        body.classList.remove('scroll')
    }
})

const menu = document.querySelectorAll('.menu li')
const contents = document.querySelectorAll('.contents')
init(0)
function init(num) {
    menu[num].classList.add('active')
    contents[num].classList.add('on')
}
function reset() {
    for (let i = 0; i < menu.length; i++) {

        menu[i].classList.remove('active')
        contents[i].classList.remove('on')
    }
}
menu.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
        console.log(i)
        reset()
        init(i)
    })
})




body.classList.add('m-nav-open')
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
const mNavBtn = document.querySelector('.mob-nav-btn')
navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()

        const id = btn.getAttridute('Href')
        const target = document.querySelector('id')
        const headerH=document.querySelector('header').offsetHeight
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        })
        body.classList.toggle('m=nav-open')
    })
})
mNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('m=nav-open')
})