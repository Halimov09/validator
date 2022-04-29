
window.addEventListener('DOMContentLoaded', () =>{
    const slides = document.querySelectorAll('.offer__slide'),
          slideWrapper = document.querySelector('.offer__slider-wrapper'),
          slideInner = document.querySelector('.offer__slider-inner'),
          width = getComputedStyle(slideWrapper).width,
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current');

    let slideIndex =100;
    let offset = 0;

    slideInner.style.width = 100 * slides.length + '%'

    slideInner.style.display = 'flex';
    slideInner.style.transition = '.6s ease'
    slideWrapper.style.overflow = 'hidden';

    slides.forEach(slide =>{
        slide.style.width = width
    })

    next.addEventListener('click', () =>{
        if(offset == (+width.slice(0, width.length - 3) * (slides.length - 1))){
            offset = 0;
        }else{
            offset += +width.slice(0, width.length - 3)
        }

        slideInner.style.transform = `translateX(-${offset}px)`
    })

    prev.addEventListener('click', () =>{
        if(offset == 0){
            offset = (+width.slice(0, width.length - 3) * (slides.length - 1))
        }else{
            offset -= +width.slice(0, width.length - 3)
        }

        slideInner.style.transform = `translateX(-${offset}px)`

        if(slideIndex == 1){
            slideIndex = slides.length
        }else{
            slideIndex--
        }

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`
        }else{
            current.textContent = slideIndex
        }
    })
})

