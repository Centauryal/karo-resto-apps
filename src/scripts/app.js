import initDrawer from './init-drawer';

class App {
    constructor({ button, drawer, menu, content }) {
        this._button = button;
        this._drawer = drawer;
        this._menu = menu;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        initDrawer.init({
            button: this._button,
            drawer: this._drawer,
            menu: this._menu,
            content: this._content,
        });
    }
}

export default App;