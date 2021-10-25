import modals from './modules/modals';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    slider({
        slidePack: '.main-slider-item',
        wrapper: '.main-slider-wrapper',
        field: '.main-slider',
        direction: 'V',
        timer: 10
    });
});