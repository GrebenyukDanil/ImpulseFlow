const menu = document.querySelector('.navbar')
const menuBtn = document.querySelector('.burger')
const downloadpopup = document.querySelector('.popup')
const downloadbutton = document.querySelector('.section-one__fbutton')
const downloadbutton2 = document.querySelector('.section-ten__download-button')
const exitdownload = document.querySelector('.download__exit')
const body = document.body;



if (menu && menuBtn) {
    downloadbutton.addEventListener('click', () => {
        console.log('1')
        downloadpopup.classList.toggle('popup__active')
    })
    downloadbutton2.addEventListener('click', () => {
        console.log('3')
        downloadpopup.classList.toggle('popup__active')
    })
    exitdownload.addEventListener('click', () => {
        console.log('1')
        downloadpopup.classList.remove('popup__active')
    })
    menuBtn.addEventListener('click', () => {
        console.log('2')
        menu.classList.toggle('navbar__active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
    menu.querySelectorAll('.navbar__li').forEach(link=> {
        menu.classList.remove('navbar__active')
        menuBtn.classList.remove('active')
        body.classList.remove('lock')
    })
}