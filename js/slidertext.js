let slider = document.querySelector('.carusel__section');
let left = document.querySelector('#left');
let rigt = document.querySelector('#right');


left.addEventListener('click', function(){
    slider.style.transform = "translateX(-25%)";
});
rigt.addEventListener('click', function(){
    slider.style.transform = "translateX(0%)";
});

