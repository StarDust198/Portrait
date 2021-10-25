function slider({next, prev, totalCounter, currentCounter, slidePack, wrapper, field, indicators, direction, timer}) {
    const sliderNext = next ? document.querySelector(next) : undefined,
          sliderPrev = prev ? document.querySelector(prev) : undefined,
          sliderTotal = totalCounter ? document.querySelector(totalCounter) : undefined,
          sliderCurrent = currentCounter ? document.querySelector(currentCounter) : undefined,
          slides = document.querySelectorAll(slidePack),          
          slidesField = document.querySelector(field),
          slidesWrapper = document.querySelector(wrapper),
          dots = indicators ? [] : undefined,
      
          getZero = num => num < 10 ? `0${num}` : `${num}`;

    let dotsField, width, height;
    let slideIndex = Math.floor(1 + Math.random()*slides.length);

    slidesField.style.display = 'flex';
    slidesWrapper.style.transition = '0.5s all';
    slidesField.style.overflow = 'hidden';
    if (direction == 'V' || direction == 'vertical') {
        height = window.getComputedStyle(slides[0]).height;

        slidesField.style.height = height;
        slidesWrapper.style.height = 100 * slides.length + '%';
        slidesField.style.flexDirection = 'column';
    } else {
        width = window.getComputedStyle(slides[0]).width;

        slidesField.style.width = width;
        slidesWrapper.style.width = 100 * slides.length + '%';
    }    

    if (dots) {
        dotsField = document.createElement('ol');           // create indicators field
        dotsField.classList.add('carousel-indicators');
        dotsField.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
        `;
        slidesField.style.position = 'relative';
        slidesField.append(dotsField);
    }

    if (sliderTotal) {
        sliderTotal.textContent = getZero(slides.length);    // initial slider setup 
    }
    
    slides.forEach(slide => {
        if (width) {
            slide.style.width = width;                       // force proper width
        }

        if (height) {
            slide.style.height = height;                      // or height
        }
        

        if (dots) {        
            const dot = document.createElement('li');        // create indicators
            dot.classList.add('dot');
            dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
            `;
            dotsField.append(dot);
            dots.push(dot);
        }
    });

    const moveSlide = () => {
        slideIndex > slides.length ? slideIndex = 1         // check if index's correct
            : slideIndex === 0 ? slideIndex = slides.length : slideIndex;
        if (sliderCurrent) {
            sliderCurrent.textContent = getZero(slideIndex);
        }
        
        if (dots) {
            dots.forEach((dot, i) => i === slideIndex - 1 ? dot.style.opacity = 1 : dot.style.opacity = 0.5);
        }
        
        if (direction == 'V' || direction == 'vertical') {
            slidesWrapper.style.transform = `translateY(${0 - 100/slides.length * (slideIndex - 1)}%)`;
        } else {
            slidesWrapper.style.transform = `translateX(${0 - 100/slides.length * (slideIndex - 1)}%)`;
        }        
    };

    let changeTimer = timer ? setInterval(() => {
        slideIndex++;
        moveSlide();
    }, timer * 1000) : undefined;

    moveSlide();

    if (dots) {
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                slideIndex = i+1;
                moveSlide();
            });
        });
    }

    if (sliderNext) {
        sliderNext.addEventListener('click', () => {
            slideIndex++;
            moveSlide();
        });
    }

    if (sliderPrev) {
        sliderPrev.addEventListener('click', () => {
            slideIndex--;
            moveSlide();
        });
    }
}

export default slider;