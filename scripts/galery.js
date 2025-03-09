const allCards = document.querySelector('[data-js-all-cards]');
const forWork = document.querySelector('[data-js-for-work]');
const forHealth = document.querySelector('[data-js-for-health]');
const forHarmony = document.querySelector('[data-js-for-harmony]');
const cardsContainer = document.querySelector('[data-js-cards-container]');
let cards = document.querySelectorAll('.gifts__container_cards_container_card');
let cardsArray = Array.from(cards);

function removeCards() {
    while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
    };
};

function setAllCards() {
    cardsArray.map(card =>  cardsContainer.appendChild(card));
    setBackgroundColor();
    allCards.style.backgroundColor = '#FFFFFF33';
};

function setForWorkCards() {
    setAllCards();
    cardsArray.filter(card => card.textContent.includes('For work') ? cardsContainer.appendChild(card) : cardsContainer.removeChild(card));
    setBackgroundColor();
    forWork.style.backgroundColor = '#FFFFFF33'; 
};

function setForHealthCards() {
    setAllCards();
    cardsArray.filter(card => card.textContent.includes('For health') ? cardsContainer.appendChild(card) : cardsContainer.removeChild(card));
    setBackgroundColor();
    forHealth.style.backgroundColor = '#FFFFFF33';
};

function setForHarmonyCards() {
    setAllCards();
    cardsArray.filter(card => card.textContent.includes('For harmony') ? cardsContainer.appendChild(card) : cardsContainer.removeChild(card));
    setBackgroundColor();
    forHarmony.style.backgroundColor = '#FFFFFF33';
};

allCards.addEventListener('click', setAllCards);
forWork.addEventListener('click', setForWorkCards);
forHealth.addEventListener('click', setForHealthCards);
forHarmony.addEventListener('click', setForHarmonyCards);

function setBackgroundColor() {
    allCards.style.backgroundColor = 'transparent'
    forWork.style.backgroundColor = 'transparent'
    forHealth.style.backgroundColor = 'transparent'
    forHarmony.style.backgroundColor = 'transparent'
    cardsContainer.style.alignContent = 'flex-start'  
};