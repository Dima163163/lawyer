export const initSlider = () => {
  const sliderBtnsContainer = document.querySelector(
    '.hero_slider_btns_container'
  );
  const slideItems = document.querySelectorAll('.hero_slider_item');
  const dotsItems = document.querySelectorAll('.dot');
  const btnPrev = document.querySelector('.hero_slider_btn_prev');
  const btnNext = document.querySelector('.hero_slider_btn_next');
  let count = 0;

  const changeSlideNext = () => {
    if (count < slideItems.length - 1) {
      count++;
      slideItems.forEach((slide) => {
        slide.classList.remove('active');
      });
      slideItems[count].classList.add('active');
    }
  };

  const changeSlidePrev = () => {
    if (count > 0) {
      count--;
      slideItems.forEach((slide) => {
        slide.classList.remove('active');
      });
      slideItems[count].classList.add('active');
    }
  };

  const disabledButton = () => {
    if (count === slideItems.length - 1) {
      btnNext.classList.add('disabled');
      btnNext.setAttribute('disabled', '');
      btnPrev.classList.remove('disabled');
      btnPrev.removeAttribute('disabled');
    } else if (count === 0) {
      btnPrev.classList.add('disabled');
      btnPrev.setAttribute('disabled', '');
      btnNext.classList.remove('disabled');
      btnNext.removeAttribute('disabled');
    } else {
      btnNext.classList.remove('disabled');
      btnNext.removeAttribute('disabled');
      btnPrev.classList.remove('disabled');
      btnPrev.removeAttribute('disabled');
    }
  };

  const changeDot = () => {
    const activeSlide = document.querySelector('.hero_slider_item.active');
    const activeSlideId = activeSlide.dataset.id;
    dotsItems.forEach((dot) => {
      dot.classList.remove('active');
      if (dot.id === activeSlideId) {
        dot.classList.add('active');
      }
    });
  };

  disabledButton();
  sliderBtnsContainer.addEventListener('click', (e) => {
    if (e.target.closest('.dot')) {
      const dotId = e.target.id;
      count = dotId - 1;
      dotsItems.forEach((dot) => {
        dot.classList.remove('active');
      });
      e.target.classList.add('active');
      slideItems.forEach((slide) => {
        slide.classList.remove('active');
        const slideId = slide.dataset.id;
        if (dotId === slideId) {
          slide.classList.add('active');
        }
      });
      disabledButton();
    }

    if (e.target.closest('.slider_btn')) {
      if (e.target.closest('.hero_slider_btn_prev')) {
        changeSlidePrev();
        changeDot();
        disabledButton();
      }
      if (e.target.closest('.hero_slider_btn_next')) {
        changeSlideNext();
        changeDot();
        disabledButton();
      }
    }
  });
};
