
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  /**
   * Bungalow isotope and filter
   */
  window.addEventListener('load', () => {
    let bungalowContainer = select('.bungalow-container');
    if (bungalowContainer) {
      let bungalowIsotope = new Isotope(bungalowContainer, {
        itemSelector: '.bungalow-item',
        layoutMode: 'fitRows'
      });

      let bungalowFilters = select('#bungalow-flters li', true);

      on('click', '#bungalow-flters li', function(e) {
        e.preventDefault();
        bungalowFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        bungalowIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        bungalowIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate bungalow lightbox 
   */
  const bungalowLightbox = GLightbox({
    selector: '.bungalow-lightbox'
  });

  /**
   * bungalow details slider
   */
  new Swiper('.bungalow-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


})()