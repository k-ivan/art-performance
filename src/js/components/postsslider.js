import { tns } from 'tiny-slider/src/tiny-slider'

const PostsSlider = (() => {

  let slider;
  const breakpoint = window.matchMedia('(min-width: 1024px)');

  function isBreakpoint() {
    if (breakpoint.matches) {
      if (slider) {
        slider.destroy();
        slider = null;
      }
    } else if (!breakpoint.matches) {
      return sliderEnable();
    }
  }

  function sliderEnable() {
    slider = tns({
      container: '[data-tns]',
      mode: 'gallery',
      nav: false,
      controls: false,
      mouseDrag: true,
      speed: 500,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });
  }

  return {
    init() {
      breakpoint.addListener(isBreakpoint);
      isBreakpoint();
    },
    destroy() {
      breakpoint.removeListener(isBreakpoint);
      if (slider) {
        slider.destroy();
        slider = null;
      }
    }
  }

})();

export default PostsSlider;
