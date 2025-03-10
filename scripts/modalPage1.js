const forWork = document.querySelector('[data-js-for-work]');
const forHealth = document.querySelector('[data-js-for-health]');
const forHarmony = document.querySelector('[data-js-for-harmony]');


function createWorkModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal__content';
    modal.appendChild(modalContent);

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'modal__content_img_wrapper';
    modalContent.appendChild(imgWrapper);

    const modalTextWrapper = document.createElement('div');
    modalTextWrapper.className = 'modal__content_text_wrapper'
    modalContent.appendChild(modalTextWrapper);

    const headText = document.createElement('div');
    headText.className = 'modal__content_text_wrapper_head';
    modalTextWrapper.appendChild(headText);

    const head4 = document.createElement('h4');
    head4.className = 'modal__content_text_wrapper_head_head4';
    head4.textContent = 'For work';
    headText.appendChild(head4);

    const head3 = document.createElement('h3');
    head3.className = 'modal__content_text_wrapper_head_head3';
    head3.textContent = 'Console.log Guru';
    headText.appendChild(head3);

    const paragraph = document.createElement('p');
    paragraph.className = 'modal__content_text_wrapper_head_paragraph';
    headText.appendChild(paragraph);
    paragraph.textContent ='Uses console.log like a crystal ball to find any issue.';

    const textSubhead = document.createElement('div');
    textSubhead.className = 'modal__content_text_wrapper_subhead';
    modalTextWrapper.appendChild(textSubhead);

    const subhead4 = document.createElement('h4');
    subhead4.className = 'modal__content_text_wrapper_subhead_subhead4';
    subhead4.textContent = 'Adds superpowers to:';
    textSubhead.appendChild(subhead4);

    const subheadContainer = document.createElement('div');
    subheadContainer.className = 'modal__content_text_wrapper_subhead_container';
    textSubhead.appendChild(subheadContainer);

    const span1 = document.createElement('span');
    span1.className = 'modal__content_text_wrapper_subhead_container_span1';
    span1.textContent = 'LIVE';

    const span2 = document.createElement('span');
    span2.className = 'modal__content_text_wrapper_subhead_container_span1';
    span2.textContent = 'CREATE';

    const span3 = document.createElement('span');
    span3.className = 'modal__content_text_wrapper_subhead_container_span1';
    span3.textContent = 'LOVE';

    const span4 = document.createElement('span');
    span4.className = 'modal__content_text_wrapper_subhead_container_span1';
    span4.textContent = 'DREAM';

    subheadContainer.appendChild(span1);
    subheadContainer.appendChild(span2);
    subheadContainer.appendChild(span3);
    subheadContainer.appendChild(span4);

    const subPar = document.createElement('p')
    subPar.className = 'modal__content_text_wrapper_subhead_container_subPar';
    subPar.textContent = '+500';
    span1.appendChild(subPar);

    const subPar2 = document.createElement('p');
    subPar2.className = 'modal__content_text_wrapper_subhead_container_subPar';
    subPar2.textContent = '+500';
    span2.appendChild(subPar2);

    const subPar3 = document.createElement('p');
    subPar3.className = 'modal__content_text_wrapper_subhead_container_subPar';
    subPar3.textContent = '+200';
    span3.appendChild(subPar3);

    const subPar4 = document.createElement('p');
    subPar4.className = 'modal__content_text_wrapper_subhead_container_subPar';
    subPar4.textContent = '+400';
    span4.appendChild(subPar4);

    const spanImg1 = document.createElement('span');
    spanImg1.className = 'modal__content_text_wrapper_subhead_container_img';
    spanImg1.classList.add('modal__content_text_wrapper_subhead_container_img1');
    span1.appendChild(spanImg1);

    const spanImg2 = document.createElement('span');
    spanImg2.className = 'modal__content_text_wrapper_subhead_container_img';
    spanImg2.classList.add('modal__content_text_wrapper_subhead_container_img2');
    span2.appendChild(spanImg2);

    const spanImg3 = document.createElement('span');
    spanImg3.className = 'modal__content_text_wrapper_subhead_container_img';
    spanImg3.classList.add('modal__content_text_wrapper_subhead_container_img3');
    span3.appendChild(spanImg3);

    const spanImg4 = document.createElement('span');
    spanImg4.className = 'modal__content_text_wrapper_subhead_container_img';
    spanImg4.classList.add('modal__content_text_wrapper_subhead_container_img4');
    span4.appendChild(spanImg4);

    document.body.appendChild(modal)
}

createWorkModal()

