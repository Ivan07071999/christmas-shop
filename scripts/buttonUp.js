const buttonTop = document.querySelector('[data-js-button-up]');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (window.screen.width <= 768 && document.documentElement.scrollTop > 300 ) {
        buttonTop.style.display = 'block';
    } else {
        buttonTop.style.display = 'none';
    };
};

function onTopFunction() {
    document.documentElement.scrollTop = 0;
}

