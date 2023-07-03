
const toggler = document.querySelector('.check');
const togglerClass = document.querySelector('.toggler');
const ball = document.querySelector('.ball')

let topColor = document.querySelector('.top-color');
let fallowers = document.querySelectorAll('.fallowers');
let views = document.querySelectorAll('.views');
let title = document.getElementById('title');
let title2 = document.getElementById('title-2');
let cardSocial = document.querySelectorAll('.social-box')
let cardOverview = document.querySelectorAll('.overview-box')

toggler.addEventListener('change', function(){
    document.body.classList.toggle('dark-mode-bg');
    document.body.classList.toggle('dark-mode-text');

    togglerClass.classList.toggle('toggler-dark');
    ball.classList.toggle('ball-dark');

    title.classList.toggle('dark-mode-white-text');
    title2.classList.toggle('dark-mode-white-text');
    topColor.classList.toggle('dark-mode-top');

    fallowers.forEach(function(f){
        f.classList.toggle('dark-mode-white-text');
    })

    views.forEach(function(v){
        v.classList.toggle('dark-mode-white-text');
    })

    cardSocial.forEach(function(cs){
        cs.classList.toggle('dark-mode-box');
    })

    cardOverview.forEach(function(co){
        co.classList.toggle('dark-mode-box');
    })
    
})