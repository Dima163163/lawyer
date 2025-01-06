export const initBurgerMenu = () => {
  const burgerBtn = document.querySelector('.burger_menu');
  const mobileMenu = document.querySelector('.mobile_menu');
  const btnClose = document.querySelector('.btn_close')

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active')
  })

  btnClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
  })
}