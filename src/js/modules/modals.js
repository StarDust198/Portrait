import calcScroll from "./calcScroll";

const modals = () => {
    let modalCounter = 0;

    const showModal = (modalSelector) => {
        const modal = document.querySelector(modalSelector);

        if (modalSelector === '.popup-gift') {
            document.querySelector('.fixed-gift').remove();
        }

        modalCounter++;

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${calcScroll()}px`;
    };

    const hideModal = (modalSelector) => {
        const modal = document.querySelector(modalSelector);

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    };

    const modalTimer = setTimeout(() => {
        if (!modalCounter) {
            showModal('.popup-consultation', modalTimer);
        }
    }, 60000);

    const showModalByScroll = () => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

        if ((window.pageYOffset + document.documentElement.clientHeight + 1 >= 
            scrollHeight) && !modalCounter) {                
                showModal('.popup-gift');
                window.removeEventListener('scroll', showModalByScroll);                
        }
    };

    window.addEventListener('scroll', showModalByScroll);

    const bindModal = (btnSelector, modalSelector, closeSelector, 
    closeOnOverlay = 'true') => {
        const modalBtns = document.querySelectorAll(btnSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
       
        modalBtns.forEach(item => item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            
            windows.forEach(window => {
                window.style.display = 'none';
                window.classList.add('animated', 'fadeIn');
            });
    
            showModal(modalSelector);
        }));
    
        modal.addEventListener('click', (e) => {
            if ((closeOnOverlay && e.target == modal) || e.target == closeBtn ||
            e.target == closeBtn.firstElementChild) {
                windows.forEach(window => window.style.display = 'none');    
                hideModal(modalSelector);
            }
        });
    };

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
};

export default modals;