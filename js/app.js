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

// 별 보기 가이드 탭
const tabs = document.querySelectorAll("#guides .menu li");
const cards = document.querySelectorAll("#guides .contents li");

showGuide(0)
function showGuide(index) {
    // 1. 전부 on 빼기
    tabs.forEach((tab) => tab.classList.remove("on"));
    cards.forEach((card) => card.classList.remove("on"));
    // 2. 선택한 번호에만 on 붙이기
    tabs[index].classList.add("on");
    cards[index].classList.add("on");
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showGuide(index));
});
cards.forEach((card, index) => {
    card.addEventListener("click", () => showGuide(index));
});



const mNavBtn = document.querySelector('.mob-nav-btn')
const navBtns = document.querySelectorAll('nav ul li a')


body.classList.add('m-nav-open')
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

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
        body.classList.toggle('m-nav-open')
    })
})
mNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('m-nav-open')
})