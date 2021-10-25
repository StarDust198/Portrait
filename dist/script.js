/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])({
    slidePack: '.main-slider-item',
    wrapper: '.main-slider-wrapper',
    field: '.main-slider',
    direction: 'V',
    timer: 10
  });
});

/***/ }),

/***/ "./src/js/modules/calcScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

/* harmony default export */ __webpack_exports__["default"] = (calcScroll);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll */ "./src/js/modules/calcScroll.js");


const modals = () => {
  let modalCounter = 0;

  const showModal = modalSelector => {
    const modal = document.querySelector(modalSelector);

    if (modalSelector === '.popup-gift') {
      document.querySelector('.fixed-gift').remove();
    }

    modalCounter++;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${Object(_calcScroll__WEBPACK_IMPORTED_MODULE_0__["default"])()}px`;
  };

  const hideModal = modalSelector => {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  };
  /*     const modalTimer = setTimeout(() => {
          if (!modalCounter) {
              showModal('.popup-consultation', modalTimer);
          }
      }, 60000); */


  const showModalByScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    if (window.pageYOffset + document.documentElement.clientHeight + 1 >= scrollHeight && !modalCounter) {
      showModal('.popup-gift');
      window.removeEventListener('scroll', showModalByScroll);
    }
  };

  window.addEventListener('scroll', showModalByScroll);

  const bindModal = (btnSelector, modalSelector, closeSelector, closeOnOverlay = 'true') => {
    const modalBtns = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          closeBtn = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');
    modalBtns.forEach(item => item.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
      }

      windows.forEach(window => {
        window.style.display = 'none';
        window.classList.add('animated', 'fadeIn');
      });
      showModal(modalSelector);
    }));
    modal.addEventListener('click', e => {
      if (closeOnOverlay && e.target == modal || e.target == closeBtn || e.target == closeBtn.firstElementChild) {
        windows.forEach(window => window.style.display = 'none');
        hideModal(modalSelector);
      }
    });
  };

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
  next,
  prev,
  totalCounter,
  currentCounter,
  slidePack,
  wrapper,
  field,
  indicators,
  direction,
  timer
}) {
  const sliderNext = next ? document.querySelector(next) : undefined,
        sliderPrev = prev ? document.querySelector(prev) : undefined,
        sliderTotal = totalCounter ? document.querySelector(totalCounter) : undefined,
        sliderCurrent = currentCounter ? document.querySelector(currentCounter) : undefined,
        slides = document.querySelectorAll(slidePack),
        slidesField = document.querySelector(field),
        slidesWrapper = document.querySelector(wrapper),
        dots = indicators ? [] : undefined,
        getZero = num => num < 10 ? `0${num}` : `${num}`;

  let dotsField, width, height;
  let slideIndex = Math.floor(1 + Math.random() * slides.length);
  slidesField.style.display = 'flex';
  slidesWrapper.style.transition = '0.5s all';
  slidesField.style.overflow = 'hidden';

  if (direction == 'V' || direction == 'vertical') {
    height = window.getComputedStyle(slides[0]).height;
    slidesField.style.height = height;
    slidesWrapper.style.height = 100 * slides.length + '%';
    slidesField.style.flexDirection = 'column';
  } else {
    width = window.getComputedStyle(slides[0]).width;
    slidesField.style.width = width;
    slidesWrapper.style.width = 100 * slides.length + '%';
  }

  if (dots) {
    dotsField = document.createElement('ol'); // create indicators field

    dotsField.classList.add('carousel-indicators');
    dotsField.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
        `;
    slidesField.style.position = 'relative';
    slidesField.append(dotsField);
  }

  if (sliderTotal) {
    sliderTotal.textContent = getZero(slides.length); // initial slider setup 
  }

  slides.forEach(slide => {
    if (width) {
      slide.style.width = width; // force proper width
    }

    if (height) {
      slide.style.height = height; // or height
    }

    if (dots) {
      const dot = document.createElement('li'); // create indicators

      dot.classList.add('dot');
      dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
            `;
      dotsField.append(dot);
      dots.push(dot);
    }
  });

  const moveSlide = () => {
    slideIndex > slides.length ? slideIndex = 1 // check if index's correct
    : slideIndex === 0 ? slideIndex = slides.length : slideIndex;

    if (sliderCurrent) {
      sliderCurrent.textContent = getZero(slideIndex);
    }

    if (dots) {
      dots.forEach((dot, i) => i === slideIndex - 1 ? dot.style.opacity = 1 : dot.style.opacity = 0.5);
    }

    if (direction == 'V' || direction == 'vertical') {
      slidesWrapper.style.transform = `translateY(${0 - 100 / slides.length * (slideIndex - 1)}%)`;
    } else {
      slidesWrapper.style.transform = `translateX(${0 - 100 / slides.length * (slideIndex - 1)}%)`;
    }
  };

  let changeTimer = timer ? setInterval(() => {
    slideIndex++;
    moveSlide();
  }, timer * 1000) : undefined;
  moveSlide();

  if (dots) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        slideIndex = i + 1;
        moveSlide();
      });
    });
  }

  if (sliderNext) {
    sliderNext.addEventListener('click', () => {
      slideIndex++;
      moveSlide();
    });
  }

  if (sliderPrev) {
    sliderPrev.addEventListener('click', () => {
      slideIndex--;
      moveSlide();
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map