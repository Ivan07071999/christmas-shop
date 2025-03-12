const forWork = document.querySelector('[data-js-for-work]');
const forWork2 = document.querySelector('[data-js-for-work2]');
const forHealth = document.querySelector('[data-js-for-health]');
const forHarmony = document.querySelector('[data-js-for-harmony]');

const modal1 = document.querySelector('.gifts__modal1_hidden');
const closeModal1 = document.querySelector('.gifts__close_modal1');

const modal2 = document.querySelector('.gifts__modal2_hidden');
const closeModal2 = document.querySelector('.gifts__close_modal2');

const modal3 = document.querySelector('.gifts__modal3_hidden');
const closeModal3 = document.querySelector('.gifts__close_modal3');

const modal4 = document.querySelector('.gifts__modal4_hidden');
const closeModal4 = document.querySelector('.gifts__close_modal4');


function openPopUpForHarmony() {
    modal4.classList.toggle('gifts__modal4_hidden');
    scrollController.disablesScroll();
};

forHarmony.addEventListener('click', openPopUpForHarmony)

function closePopUpForHarmony() {
    modal4.classList.toggle('gifts__modal4_hidden');
    scrollController.enabledScroll();
}

closeModal4.addEventListener('click', closePopUpForHarmony);

modal4.addEventListener('click', (event) => {
    if(event.target.classList.contains('gifts__modal')) {
      scrollController.enabledScroll()
        modal4.classList.toggle('gifts__modal4_hidden');
    };
 });

 
function openPopUpForWork2() {
    modal3.classList.toggle('gifts__modal3_hidden');
    scrollController.disablesScroll();
};

forWork2.addEventListener('click', openPopUpForWork2)

function closePopUpForWork2() {
    modal3.classList.toggle('gifts__modal3_hidden');
    scrollController.enabledScroll();
}

closeModal3.addEventListener('click', closePopUpForWork2);

modal3.addEventListener('click', (event) => {
    if(event.target.classList.contains('gifts__modal')) {
      scrollController.enabledScroll()
        modal3.classList.toggle('gifts__modal3_hidden');
    };
 });

  function openPopUpForHealth() {
    modal2.classList.toggle('gifts__modal2_hidden');
    scrollController.disablesScroll();
};

forHealth.addEventListener('click', openPopUpForHealth)

function closePopUpForHealth() {
    modal2.classList.toggle('gifts__modal2_hidden');
    scrollController.enabledScroll();
};

closeModal2.addEventListener('click', closePopUpForHealth);

modal2.addEventListener('click', (event) => {
    if(event.target.classList.contains('gifts__modal')) {
      scrollController.enabledScroll()
        modal2.classList.toggle('gifts__modal2_hidden');
    };
 });


function openPopUpForWork() {
    modal1.classList.toggle('gifts__modal1_hidden');
    scrollController.disablesScroll();
};

forWork.addEventListener('click', openPopUpForWork)

function closePopUpForWork() {
    modal1.classList.toggle('gifts__modal1_hidden');
    scrollController.enabledScroll();
}

closeModal1.addEventListener('click', closePopUpForWork);

modal1.addEventListener('click', (event) => {
    if(event.target.classList.contains('gifts__modal')) {
      scrollController.enabledScroll()
        modal1.classList.toggle('gifts__modal1_hidden');
    };
 });
