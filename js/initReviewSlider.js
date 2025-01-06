export const initReviewSlider = () => {
  const sliderBtns = document.querySelector('.slider_btns_reviews');
  const sliderWrapper = document.querySelector('.reviews_slider');

  const scrollSlider = (to) => {
    const slideItems = document.querySelectorAll('.review_item')
    const marginLeftSlide = getComputedStyle(slideItems[0]).marginRight;
    const scroll = Number(slideItems[0].clientWidth) + Number(parseInt(marginLeftSlide));


    if (to === 'next') {
      sliderWrapper.scrollBy({left: scroll, behavior: "smooth"})
    }

    if (to === 'prev') {
      sliderWrapper.scrollBy({left: -scroll, behavior: "smooth"})
    }
  }
  sliderBtns.addEventListener('click', (e) => {
    if (e.target.closest('.review_slider_btn_prev')) {
      scrollSlider('prev')
    }
    if (e.target.closest('.review_slider_btn_next')) {
      scrollSlider('next')
    }
  })
};