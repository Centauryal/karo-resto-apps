class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-container">
                <h1>Karo Resto</h1>
                <p>
                    We stand for something Good in everything we do. That means carefully sourced premium
                    ingredients from like-minded purveyors we admire and love.
                </p>
            </div>
        </div>
        `;
  }
}

customElements.define('my-hero', Hero);
