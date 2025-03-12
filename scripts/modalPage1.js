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

// function createWorkModal() {
//     const modal = document.createElement('div');
//     modal.className = 'modal';

//     const modalContent = document.createElement('div');
//     modalContent.className = 'modal__content';
//     modal.appendChild(modalContent);

//     const imgWrapper = document.createElement('div');
//     imgWrapper.className = 'modal__content_img_wrapper';
//     modalContent.appendChild(imgWrapper);

//     const modalTextWrapper = document.createElement('div');
//     modalTextWrapper.className = 'modal__content_text_wrapper'
//     modalContent.appendChild(modalTextWrapper);

//     const headText = document.createElement('div');
//     headText.className = 'modal__content_text_wrapper_head';
//     modalTextWrapper.appendChild(headText);

//     const head4 = document.createElement('h4');
//     head4.className = 'modal__content_text_wrapper_head_head4';
//     head4.textContent = 'For work';
//     headText.appendChild(head4);

//     const head3 = document.createElement('h3');
//     head3.className = 'modal__content_text_wrapper_head_head3';
//     head3.textContent = 'Console.log Guru';
//     headText.appendChild(head3);

//     const paragraph = document.createElement('p');
//     paragraph.className = 'modal__content_text_wrapper_head_paragraph';
//     headText.appendChild(paragraph);
//     paragraph.textContent ='Uses console.log like a crystal ball to find any issue.';

//     const textSubhead = document.createElement('div');
//     textSubhead.className = 'modal__content_text_wrapper_subhead';
//     modalTextWrapper.appendChild(textSubhead);

//     const subhead4 = document.createElement('h4');
//     subhead4.className = 'modal__content_text_wrapper_subhead_subhead4';
//     subhead4.textContent = 'Adds superpowers to:';
//     textSubhead.appendChild(subhead4);

//     const subheadContainer = document.createElement('div');
//     subheadContainer.className = 'modal__content_text_wrapper_subhead_container';
//     textSubhead.appendChild(subheadContainer);

//     const span1 = document.createElement('span');
//     span1.className = 'modal__content_text_wrapper_subhead_container_span1';
//     span1.textContent = 'LIVE';

//     const span2 = document.createElement('span');
//     span2.className = 'modal__content_text_wrapper_subhead_container_span1';
//     span2.textContent = 'CREATE';

//     const span3 = document.createElement('span');
//     span3.className = 'modal__content_text_wrapper_subhead_container_span1';
//     span3.textContent = 'LOVE';

//     const span4 = document.createElement('span');
//     span4.className = 'modal__content_text_wrapper_subhead_container_span1';
//     span4.textContent = 'DREAM';

//     subheadContainer.appendChild(span1);
//     subheadContainer.appendChild(span2);
//     subheadContainer.appendChild(span3);
//     subheadContainer.appendChild(span4);

//     const subPar = document.createElement('p')
//     subPar.className = 'modal__content_text_wrapper_subhead_container_subPar';
//     subPar.textContent = '+500';
//     span1.appendChild(subPar);

//     const subPar2 = document.createElement('p');
//     subPar2.className = 'modal__content_text_wrapper_subhead_container_subPar';
//     subPar2.textContent = '+500';
//     span2.appendChild(subPar2);

//     const subPar3 = document.createElement('p');
//     subPar3.className = 'modal__content_text_wrapper_subhead_container_subPar';
//     subPar3.textContent = '+200';
//     span3.appendChild(subPar3);

//     const subPar4 = document.createElement('p');
//     subPar4.className = 'modal__content_text_wrapper_subhead_container_subPar';
//     subPar4.textContent = '+400';
//     span4.appendChild(subPar4);

//     const spanImg1 = document.createElement('span');
//     spanImg1.className = 'modal__content_text_wrapper_subhead_container_img';
//     spanImg1.classList.add('modal__content_text_wrapper_subhead_container_img1');
//     span1.appendChild(spanImg1);

//     const spanImg2 = document.createElement('span');
//     spanImg2.className = 'modal__content_text_wrapper_subhead_container_img';
//     spanImg2.classList.add('modal__content_text_wrapper_subhead_container_img2');
//     span2.appendChild(spanImg2);

//     const spanImg3 = document.createElement('span');
//     spanImg3.className = 'modal__content_text_wrapper_subhead_container_img';
//     spanImg3.classList.add('modal__content_text_wrapper_subhead_container_img3');
//     span3.appendChild(spanImg3);

//     const spanImg4 = document.createElement('span');
//     spanImg4.className = 'modal__content_text_wrapper_subhead_container_img';
//     spanImg4.classList.add('modal__content_text_wrapper_subhead_container_img4');
//     span4.appendChild(spanImg4);

//     document.body.appendChild(modal)
// }

// createWorkModal()

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
