const hamburgerButton = document.querySelector('.header__hamburger');
const hamburgerMenu = document.querySelector('.header__link_hidden');
let links = document.querySelector('.header__link_items');
const navigationID = document.querySelector('nav')
const scrollController = {
   disablesScroll() {
      document.body.style.cssText = `
      overflow: hidden;
      `
   },
   enabledScroll() {
      document.body.style.cssText = ''
   },
}

function toggleHamburger() {
hamburgerMenu.classList.toggle('header__link_hidden');
hamburgerButton.classList.toggle('header__hamburger_active');
toggleBtn();
}

hamburgerButton.addEventListener('click', toggleHamburger)

function hiddenHamburger() {
    let links = document.querySelectorAll('.header__link_items');
    for (let i = 0; i < links.length; i += 1) {
  links[i].onclick = function() {
    toggleHamburger();
    scrollController.enabledScroll();
  }
 }   
}

hiddenHamburger();

function toggleBtn() {
    // console.log(navigationID.classList.contains('header__link_hidden'))
    if (navigationID.classList.contains('header__link_hidden')) {
        scrollController.enabledScroll();
    } else {
        scrollController.disablesScroll();
    }
}

toggleBtn();

