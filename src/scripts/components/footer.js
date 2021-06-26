class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer id="footer">
            <div class="copyright">
                Copyright &copy; 2021 <strong>Karo Resto</strong>. All Rights Reserved
            </div>
        </footer>
        `;
  }
}

customElements.define('my-footer', Footer);
