class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="nav-container">
            <a href="" class="home-link">
                <div class="logo">
                    <img src="/icons/favicon-72.png" alt="logo">
                </div>
                <h1>Karo Resto</h1>
            </a>
            <button type="button" class="menu-toggle" aria-label="Open navigation menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="nav-menu">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#/home">Home</a></li>
                    <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav-item"><a href="http://alfacentaury.azurewebsites.net">About</a></li>
                </ul>
            </div>
        </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
