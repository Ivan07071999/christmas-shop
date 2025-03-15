 async function loadJSON() {
       try {
           const response = await fetch('scripts/gifts.json'); 
           if (!response.ok) {
               throw new Error('Network response was not ok ' + response.statusText);
           }
           const data = await response.json(); 
          // console.log(data); 
           
        createCards(data);
       } catch (error) {
           console.error('Error', error);
       }
   }


   loadJSON();

const cardsContainer = document.querySelector('[data-js-cards-container]');
// console.log(cardsContainer)
   function removeCards() {
    while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
    };
};

removeCards();

function createCards(data) {
    for (let i = 0; i < data.length; i ++) {
        const item = data[i]
        //console.log(item)

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
       // console.log(categoryCard)
        categoryCard.className = 'gifts__card_text_container_category';
        textCardContainer.appendChild(categoryCard);
        categoryCard.textContent = item.category;
        //console.log(categoryCard.textContent)
        createColor(categoryCard)
        createImage(categoryCard, imageContainer)
      
        const nameCard = document.createElement('h3');
        nameCard.className = 'gifts__card_text_container_name';
        nameCard.textContent = item.name;
        textCardContainer.appendChild(nameCard);  

        
       //console.log(item.category)

        // Modal

        const modal = document.createElement('div');
        modal.className = 'modal'
        document.body.appendChild(modal)

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
        //console.log(modalCategory.textContent)
        createImage(modalCategory, modalImageContainer) 
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
        //console.log(superpowers)

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
                
                //console.log(superpowers[key])

                const superpowersImage = document.createElement('div');
                superpowersImage.className = 'gifts__modal_text_wrapper_table_content_paragraph_img';
                superpowersElement.appendChild(superpowersImage)
                //console.log(modalSuperpowerValue.textContent)

                superpowersImage.style.backgroundImage = `url(images/gifts/${modalSuperpowerValue.textContent}.png)`;
   
            }
        }

        const closeModal = document.createElement('div');
        closeModal.className = 'gifts__close_modal';
        closeModal.textContent = '🞩';
        modalContent.appendChild(closeModal);


        card.onclick = () => {
            modal.classList.add('modal__show')
          //  modal.style.display = 'flex';
            scrollController.disablesScroll();
        };

         closeModal.onclick = () => {
            //modal.style.display = 'none';
            modal.classList.remove('modal__show')
            scrollController.enabledScroll();
        };

        modal.addEventListener('click', (event) => {
       if(event.target.classList.contains('modal')) {
       // modal.style.display = 'none';
         modal.classList.remove('modal__show')
    };

    scrollController.enabledScroll();
  
        });
    };
};

createCards()

function createColor(categoryCard) {
    if (categoryCard.textContent === 'For Work') {
        categoryCard.style.color = '#4361FF';
    } else if (categoryCard.textContent === 'For Health') {
        categoryCard.style.color = '#06A44F';
    } else {
        categoryCard.style.color = '#FF43F7';
    }
};

function createImage(categoryCard, imageContainer) {
     if (categoryCard.textContent === 'For Work') {
        imageContainer.style.backgroundImage = `url(images/gifts/gift-for-work.png)`; 
    } else if (categoryCard.textContent === 'For Health') {
        imageContainer.style.backgroundImage = `url(images/gifts/gift-for-health.png)`;
    } else {
        imageContainer.style.backgroundImage = `url(images/gifts/gift-for-harmony.png)`;
    }
};

function createImage(modalCategory, modalImageContainer) {
     if (modalCategory.textContent === 'For Work') {
        modalImageContainer.style.backgroundImage = `url(images/gifts/gift-for-work.png)`; 
    } else if (modalCategory.textContent === 'For Health') {
        modalImageContainer.style.backgroundImage = `url(images/gifts/gift-for-health.png)`;
    } else {
        modalImageContainer.style.backgroundImage = `url(images/gifts/gift-for-harmony.png)`;
    }
};

document.addEventListener('DOMContentLoaded', loadJSON);

