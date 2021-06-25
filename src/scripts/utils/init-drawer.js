const initDrawer = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._openNavbarMobile(button, event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeNavbarMobile(button, event, drawer);
    });
  },

  _openNavbarMobile(button, event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('opened');
    button.setAttribute('aria-label', 'Close navigation menu.');
  },

  _closeNavbarMobile(button, event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('opened');
    button.setAttribute('aria-label', 'Open navigation menu.');
  },
};

export default initDrawer;
