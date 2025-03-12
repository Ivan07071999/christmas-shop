const workCard1 = document.querySelector('[data-js-card-1]');
const workCard3 = document.querySelector('[data-js-card-3]');
const workCard4 = document.querySelector('[data-js-card-4]');
const workCard10 = document.querySelector('[data-js-card-10]');

const healthCard2 = document.querySelector('[data-js-card-2]');
const healthCard7 = document.querySelector('[data-js-card-7]');
const healthCard5 = document.querySelector('[data-js-card-5]');
const healthCard9 = document.querySelector('[data-js-card-9]');

const harmonyCard6 = document.querySelector('[data-js-card-6]');
const harmonyCard8 = document.querySelector('[data-js-card-8]');
const harmonyCard11 = document.querySelector('[data-js-card-11]');
const harmonyCard12 = document.querySelector('[data-js-card-12]');

const closeModal = document.querySelector('.gifts__container_cards_container_card_text_header4')
const modal = document.querySelector('[data-js-modal]');
const closeModalButton = document.querySelector('[data-js-close-modal]');
const headModal = document.querySelector('[data-js-head-modal]');
const subheadModal = document.querySelector('[data-js-subhead-modal]');
const modalParagraph = document.querySelector('[data-js-paragraph]');
const modalImage = document.querySelector('[data-js-modal-img]');

const modalValueLive = document.querySelector('[data-js-live]');
const modalValueCreate = document.querySelector('[data-js-create]');
const modalValueLove = document.querySelector('[data-js-love]');
const modalValueDream = document.querySelector('[data-js-dream]');

const imageLive = document.querySelector('[data-js-live-img]');
const imageCreate = document.querySelector('[data-js-create-img]');
const imageLove = document.querySelector('[data-js-love-img]');
const imageDream = document.querySelector('[data-js-dream-img]');

let giftsName = ['For work', 'For health', 'For Harmony'];

let giftsSubhead = [
    'Console.log Guru', 'Bug Magnet', 'Shortcut Cheater', 'Merge Master',
    'Step Master', 'Snack Resister', 'Posture Levitation', 'Hydration Bot',
    'Bug Acceptance Guru', 'Error Laugher', 'Joy Charger', 'Spontaneous Coding Philosopher'
];

let value = ['+100', '+200', '+300', '+400', '+500'];

const healthInformation = 'Gets 10,000 steps a day even while sitting at the computer.';
const workInformation = 'Uses console.log like a crystal ball to find any issue.'
const harmonyInformation = 'Laughs at code errors like they’re jokes instead of getting angry.';


function openFirstModalForWork() {
    modal.classList.toggle('gifts__modal_hidden1');
    scrollController.disablesScroll();
}

function hiddenModal() {
    modal.classList.toggle('gifts__modal_hidden1');
    scrollController.enabledScroll();
}

closeModalButton.addEventListener('click', hiddenModal);

modal.addEventListener('click', (event) => {
    if(event.target.classList.contains('modal')) {
        modal.classList.toggle('gifts__modal_hidden1');
    };
    scrollController.enabledScroll();
 });

workCard1.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[0];
    openFirstModalForWork();
    createWorkContent();
});

workCard3.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[1];
    openFirstModalForWork();
    createWorkContent();
});

workCard4.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[2];
    openFirstModalForWork();
    createWorkContent();
});

workCard10.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[3];
    openFirstModalForWork();
    createWorkContent();
});

healthCard2.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[4];
    openFirstModalForWork();
    createHealthContent();
});

healthCard5.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[6];
    openFirstModalForWork();
    createHealthContent();
});

healthCard7.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[5];
    openFirstModalForWork();
    createHealthContent();
});

healthCard9.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[7];
    openFirstModalForWork();
    createHealthContent();
});

harmonyCard6.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[8];
    openFirstModalForWork();
    createHarmonyContent();
});

harmonyCard8.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[9];
    openFirstModalForWork();
    createHarmonyContent();
});

harmonyCard11.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[10];
    openFirstModalForWork();
    createHarmonyContent();
});

harmonyCard12.addEventListener('click', function() {
    subheadModal.textContent = giftsSubhead[11];
    openFirstModalForWork();
    createHarmonyContent();
});


function createHealthContent() {
    modalImage.style.backgroundImage = 'url(images/gifts/gift-for-health.png)'
    headModal.textContent = giftsName[1];
    headModal.style.color = '#06A44F';
    modalParagraph.textContent = healthInformation;
    modalValueLive.textContent = value[3];
    modalValueCreate.textContent = value[2];
    modalValueLove.textContent = value[4];
    modalValueDream.textContent = value[3];
    imageLive.setAttribute('src', 'images/gifts/+400.png');
    imageCreate.setAttribute('src', 'images/gifts/+300.png');
    imageLove.setAttribute('src', 'images/gifts/+500.png');
    imageDream.setAttribute('src', 'images/gifts/+400.png');
};

function createWorkContent() {
    modalImage.style.backgroundImage = 'url(images/gifts/gift-for-work.png)'
    headModal.textContent = giftsName[0];
    headModal.style.color = '#4361FF';
    modalParagraph.textContent = workInformation;
    modalValueLive.textContent = value[4];
    modalValueCreate.textContent = value[4];
    modalValueLove.textContent = value[1];
    modalValueDream.textContent = value[3];
    imageLive.setAttribute('src', 'images/gifts/+500.png');
    imageCreate.setAttribute('src', 'images/gifts/+500.png');
    imageLove.setAttribute('src', 'images/gifts/+200.png');
    imageDream.setAttribute('src', 'images/gifts/+400.png');
};

function createHarmonyContent() {
    modalImage.style.backgroundImage = 'url(images/gifts/gift-for-harmony.png)'
    headModal.textContent = giftsName[2];
    headModal.style.color = '#FF43F7';
    modalParagraph.textContent = harmonyInformation;
    modalValueLive.textContent = value[2];
    modalValueCreate.textContent = value[1];
    modalValueLove.textContent = value[4];
    modalValueDream.textContent = value[4];
    imageLive.setAttribute('src', 'images/gifts/+300.png');
    imageCreate.setAttribute('src', 'images/gifts/+200.png');
    imageLove.setAttribute('src', 'images/gifts/+500.png');
    imageDream.setAttribute('src', 'images/gifts/+500.png');
};