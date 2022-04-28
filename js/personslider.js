let perslider = document.querySelector('.person__slider');
let perleft = document.querySelector('#perleft');
let perrigt = document.querySelector('#perright');


perleft.addEventListener('click', function(){
    perslider.style.transform = "translateX(-67%)";
});
perrigt.addEventListener('click', function(){
    perslider.style.transform = "translateX(0%)";
});