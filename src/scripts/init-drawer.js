const initDrawer = {
    init( { button, drawer } ) {
        button.addEventListener('click', () => {
            if (drawer.classList.contains('opened')) {
                this._closeNavbarMobile(button, drawer);
            } else {
                this._openNavbarMobile(button, drawer);
            }
        });
    },
    
    _openNavbarMobile(button, drawer) {
        drawer.classList.add('opened');
        button.setAttribute('aria-label', 'Close navigation menu.');
    },
    
    _closeNavbarMobile(button, drawer) {
        drawer.classList.remove('opened');
        button.setAttribute('aria-label', 'Open navigation menu.');
    },
};

export default initDrawer;