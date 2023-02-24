const thumb = document.getElementById('thumb-img');
const navbtn = document.getElementById('navbar-button')
const navaside = document.getElementById('navbar-aside')
const closebtn = document.getElementById('close-btn')
const filter = document.getElementById('filter')

window.addEventListener('resize', () => {

    if (window.innerWidth <= 527) thumb.src = './assets/images/image-web-3-mobile.jpg'; else thumb.src = './assets/images/image-web-3-desktop.jpg';

})

navbtn.addEventListener('click', () => {
    
    document.body.style.overflowY = 'hidden'

    navaside.classList.add('show')

    filter.classList.add('show')
})

closebtn.addEventListener('click', () =>{

    document.body.style.overflowY = 'visible'

    navaside.classList.remove('show')

    filter.classList.remove('show')
})





