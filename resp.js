burger = document.querySelector('.burger')
nave = document.querySelector('.nave-bar');
navelist = document.querySelector('.nave-list');
rightNav = document.querySelector('.rightNav')





burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class')
    navelist.classList.toggle('v-class')
    nave.classList.toggle('h-nav')

})