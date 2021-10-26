import modals from './modules/modals';
// import slider from './modules/slider';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');

/*     slider({
        slidePack: '.main-slider-item',
        wrapper: '.main-slider-wrapper',
        field: '.main-slider',
        direction: 'V',
        timer: 10
    }); */
});