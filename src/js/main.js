import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import preview from './modules/preview';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let calcState = {};
    
    modals();

    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');

    forms(calcState);

    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

    showMoreStyles('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price', calcState);

    filter('.portfolio-menu', '.portfolio-block', '.portfolio-no', 'active');

    preview('.sizes-block', '-1');

    accordion('.accordion-heading');

    burger('.burger-menu', '.burger');

    scrolling('.pageup');

    drop();
});