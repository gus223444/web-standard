const body = document.querySelector('body')
const topBtn = document.querySelector('.top')
body.classList.add('scroll')

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 80) {
        body.classList.add('scroll')
    } else {
        body.classList.remove('scroll')
    }

})

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})