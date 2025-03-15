const arrowRight = document.querySelector('.slider__arrow-right');
const arrowLeft = document.querySelector('.slider__arrow-left');
const slider = document.querySelector('.slider__main');

const rangeSlider = {
    1440 : 3,
    768 : 6,
    380 : 12
};

let count = 0;
function rollSlider() {
    const sliderLength = 2100;

    if (window.screen.width > 768) {
        let move = (sliderLength - 1440 )/rangeSlider[1440];
        slider.style.transform = `translateX(-${move * count}px)`;

        setStatusLeftButton();
        setStatusRightButton();
        setButtonDisabledColor();
    };

    if (window.screen.width <= 768 && window.screen.width > 380 ) {
        
        let move = (sliderLength - 768 )/rangeSlider[768];
        slider.style.transform = `translateX(-${move * count}px)`;

        setStatusLeftButton();
        setStatusRightButton();
        setButtonDisabledColor();
    };

    if (window.screen.width <= 380 ) {
        let move = (sliderLength - 380 )/rangeSlider[380];
        slider.style.transform = `translateX(-${move * count}px)`;

        setStatusLeftButton();
        setStatusRightButton();
        setButtonDisabledColor();
    }
};

arrowRight.addEventListener('click', function() {
    count += 1;
    rollSlider();
});

arrowLeft.addEventListener('click', function() {
    count -= 1;
    rollSlider();
});

function setStatusRightButton() {
    if (count === 0) {
        arrowLeft.setAttribute('disabled', true);
    } else {
        arrowLeft.removeAttribute('disabled');
    };
};

function setStatusLeftButton() {
    let sliderLimit;
    if (window.screen.width > 768) {
        sliderLimit = rangeSlider[1440]; 
    } else if (window.screen.width > 380) {
        sliderLimit = rangeSlider[768];
    } else {
    sliderLimit = rangeSlider[380];
    };

    arrowRight.disabled = (count === sliderLimit);
   
};

setStatusLeftButton();
setStatusRightButton();

function setButtonDisabledColor() {
    if (arrowLeft.disabled === true) {
        arrowLeft.classList.add('slider__disabled_button');
    } else {
        arrowLeft.classList.remove('slider__disabled_button');
    };

    if (arrowRight.disabled === true) {
        arrowRight.classList.add('slider__disabled_button');
    } else {
        arrowRight.classList.remove('slider__disabled_button');
    };
};

setButtonDisabledColor();

window.addEventListener('resize', function() {
    count = 0; 
    rollSlider(); 
});