let perleft = document.querySelector('#perright')
let perright = document.querySelector('#perleft')
let perslider =document.querySelector('.person__slider')
let slide1 = document.querySelector('.slid1')
let slide2 = document.querySelector('.slid2')
let slide3 = document.querySelector('.slid3')
let slide4 = document.querySelector('.slid4')
let slide5 = document.querySelector('.slid5')
let slide6 = document.querySelector('.slid6')



perright.addEventListener('click', function(){
    perslider.style.transform ='translateX(-102%)'
    
})
slide1.addEventListener('click', function(){
    perslider.style.transform ='translateX(0%)'
})
slide2.addEventListener('click', function(){
    perslider.style.transform ='translateX(-100%)'
})
slide3.addEventListener('click', function(){
    perslider.style.transform ='translateX(-201%)'
})

slide4.addEventListener('click', function(){
    perslider.style.transform ='translateX(-301%)'
})
slide5.addEventListener('click', function(){
    perslider.style.transform ='translateX(-402%)'
})
slide6.addEventListener('click', function(){
    perslider.style.transform ='translateX(-501%)'
})

perleft.addEventListener('click', function(){
    perslider.style.transform= 'translateX(0%)';
})



