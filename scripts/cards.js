 async function loadJSON() {
    try {
        const response = await fetch('scripts/gifts.json'); 

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        };

        const data = await response.json(); 
        return data;

    } catch (error) {
        console.error('Error', error);
    };
};

const giftsList = await loadJSON();
  
const allCards = document.querySelector('[data-js-all-cards]');
const forWork = document.querySelector('[data-js-for-work]');
const forHealth = document.querySelector('[data-js-for-health]');
const forHarmony = document.querySelector('[data-js-for-harmony]');
const cardsContainer = document.querySelector('[data-js-cards-container]');

   function removeCards() {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    };
};

async function createCards(data) {
    removeCards();

    for (let i = 0; i < data.length; i ++) {
        const item = data[i]

        //Cards

        const card = document.createElement('div');
        card.className = 'gifts__card';
        cardsContainer.appendChild(card);
        const imageContainer = document.createElement('div');
        imageContainer.className = 'gifts__card_img_container';
        card.appendChild(imageContainer);
        const textCardContainer = document.createElement('div');
        textCardContainer.className = 'gifts__card_text_container';
        card.appendChild(textCardContainer);
        const categoryCard = document.createElement('h4');
        categoryCard.className = 'gifts__card_text_container_category';
        textCardContainer.appendChild(categoryCard);
        categoryCard.textContent = item.category;
        createColor(categoryCard);
        createImage(categoryCard, imageContainer);
      
        const nameCard = document.createElement('h3');
        nameCard.className = 'gifts__card_text_container_name';
        nameCard.textContent = item.name;
        textCardContainer.appendChild(nameCard);  

        // Modal

        const modal = document.createElement('div');
        modal.className = 'modal'
        document.body.appendChild(modal);

        const modalContent = document.createElement('div');
        modalContent.className = 'gifts__modal_wrapper';
        modal.appendChild(modalContent);

        const modalImageContainer = document.createElement('div');
        modalImageContainer.className = 'gifts__modal_img_wrapper';
        modalContent.appendChild(modalImageContainer);

        const modalTextContainer = document.createElement('div');
        modalTextContainer.className = 'gifts__modal_text_wrapper';
        modalContent.appendChild(modalTextContainer);

        const modalTextContent = document.createElement('div');
        modalTextContent.className = 'gifts__modal_text_wrapper_content';
        modalTextContainer.appendChild(modalTextContent);

        const modalCategory = document.createElement('h4');
        modalCategory.className = 'gifts__modal_text_wrapper_content_head4';
        modalCategory.textContent = item.category;
        modalTextContent.appendChild(modalCategory);
        createImageModal(modalCategory, modalImageContainer) 
        createColor(modalCategory)

        const modalName = document.createElement('h3');
        modalName.className = 'gifts__modal_text_wrapper_content_head3';
        modalName.textContent = item.name;
        modalTextContent.appendChild(modalName);

        const modalDescription = document.createElement('p');
        modalDescription.className = 'gifts__modal_text_wrapper_content_paragraph';
        modalDescription.textContent = item.description;
        modalTextContent.appendChild(modalDescription);

        const modalTableWrapper = document.createElement('div');
        modalTableWrapper.className = 'gifts__modal_text_wrapper_table';
        modalTextContainer.appendChild(modalTableWrapper);

        const modalSuperpowers = document.createElement('h4');
        modalSuperpowers.className = 'gifts__modal_text_wrapper_table_head4';
        modalSuperpowers.textContent = 'Adds superpowers to:';
        modalTableWrapper.appendChild(modalSuperpowers);

        const superpowers = item.superpowers;

        for (const key in superpowers) {
            if (superpowers.hasOwnProperty(key)) {
                const superpowersElement = document.createElement('div');
                superpowersElement.className = 'gifts__modal_text_wrapper_table_content';
                modalTableWrapper.appendChild(superpowersElement);

                const modalSuperpowerLive = document.createElement('p');
                modalSuperpowerLive.className = 'gifts__modal_text_wrapper_table_content_paragraph_par1';
                modalSuperpowerLive.textContent = `${key}`;
                modalSuperpowerLive.textContent = modalSuperpowerLive.textContent[0].toUpperCase() + modalSuperpowerLive.textContent.slice(1)

                superpowersElement.appendChild(modalSuperpowerLive);

                const modalSuperpowerValue = document.createElement('p');
                modalSuperpowerValue.className = 'gifts__modal_text_wrapper_table_content_paragraph_par2';
                modalSuperpowerValue.textContent = `${superpowers[key]}`;
                superpowersElement.appendChild(modalSuperpowerValue);

                const superpowersImage = document.createElement('div');
                superpowersImage.className = 'gifts__modal_text_wrapper_table_content_paragraph_img';
                superpowersElement.appendChild(superpowersImage)

                superpowersImage.style.backgroundImage = `url(images/gifts/${modalSuperpowerValue.textContent}.png)`;
   
            }
        }

        const closeModal = document.createElement('div');
        closeModal.className = 'gifts__close_modal';
        closeModal.textContent = '🞩';
        modalContent.appendChild(closeModal);

        card.onclick = () => {
            modal.classList.add('modal__show')
            scrollController.disablesScroll();
        };

            closeModal.onclick = () => {
            modal.classList.remove('modal__show')
            scrollController.enabledScroll();
        };

        modal.addEventListener('click', (event) => {
            if(event.target.classList.contains('modal')) {
            modal.classList.remove('modal__show')
        };

        scrollController.enabledScroll();

        });
    };

    setBackgroundColor();
};

function createColor(categoryCard) {
    if (categoryCard.textContent === 'For Work') {
        categoryCard.style.color = '#4361FF';
    } else if (categoryCard.textContent === 'For Health') {
        categoryCard.style.color = '#06A44F';
    } else {
        categoryCard.style.color = '#FF43F7';
    };
};

function createImage(categoryCard, imageContainer) {
     if (categoryCard.textContent === 'For Work') {
        imageContainer.style.backgroundImage = `url(images/gifts/gift-for-work.png)`; 
    } else if (categoryCard.textContent === 'For Health') {
        imageContainer.style.backgroundImage = `url(images/gifts/gift-for-health.png)`;
    } else {
        imageContainer.style.backgroundImage = `url(images/gifts/gift-for-harmony.png)`;
    };
};

function createImageModal(modalCategory, modalImageContainer) {
     if (modalCategory.textContent === 'For Work') {
        modalImageContainer.style.backgroundImage = `url(images/gifts/gift-for-work.png)`; 
    } else if (modalCategory.textContent === 'For Health') {
        modalImageContainer.style.backgroundImage = `url(images/gifts/gift-for-health.png)`;
    } else {
        modalImageContainer.style.backgroundImage = `url(images/gifts/gift-for-harmony.png)`;
    };
};

function createCardsForWork() {
    const giftFilteredByWork = giftsList.filter((card) => card.category === 'For Work');
    createCards(giftFilteredByWork);
    forWork.style.backgroundColor = '#FFFFFF33';
};

function createCardsForHealth() {
    const giftFilteredByHealth = giftsList.filter((card) => card.category === 'For Health');
    createCards(giftFilteredByHealth);
    forHealth.style.backgroundColor = '#FFFFFF33'
};

function createCardsForHarmony() {
    const giftFilteredByHarmony = giftsList.filter((card) => card.category === 'For Harmony');
    createCards(giftFilteredByHarmony);
    forHarmony.style.backgroundColor = '#FFFFFF33';
};

function createAllCards() {
    let j, temp;

    for (let i = 0; i < giftsList.length; i++) {
        j = Math.floor(Math.random() * (i + 1));
	    temp = giftsList[j];
	    giftsList[j] = giftsList[i];
	    giftsList[i] = temp;
    };
    
    createCards(giftsList);
    allCards.style.backgroundColor = '#FFFFFF33';
};

allCards.addEventListener('click', createAllCards);
forHealth.addEventListener('click', createCardsForHealth);
forWork.addEventListener('click', createCardsForWork);
forHarmony.addEventListener('click', createCardsForHarmony);

function setBackgroundColor() {
    allCards.style.backgroundColor = 'transparent'
    forWork.style.backgroundColor = 'transparent'
    forHealth.style.backgroundColor = 'transparent'
    forHarmony.style.backgroundColor = 'transparent'
};

createAllCards();