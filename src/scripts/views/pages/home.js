import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate } from '../templates/template-creator';
import Loading from '../templates/template-loading';

const Home = {
  async render() {
    return `
          <section id="products" class="products">
            <div class="container">
              <header class="section-header">
                <h2 class="section-title">Our Restaurant</h2>
              </header>

              <div id="loading"></div>
              <div id="product-list" class="product-list"></div>
            </div>
          </section>
        `;
  },

  async afterRender() {
    const main = document.querySelector('.products');
    const loading = document.querySelector('#loading');
    const listContainer = document.querySelector('#product-list');

    loading.innerHTML = Loading();
    main.style.display = 'none';
    listContainer.innerHTML = '';

    try {
      const data = await RestaurantSource.listRestaurant();
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restaurantItemTemplate(restaurant);
      });
      loading.style.display = 'none';
      main.style.display = 'block';
    } catch (error) {
      loading.style.display = 'none';
      main.style.display = 'block';
      listContainer.innerHTML = `${error}, Check your Connection!`;
    }
  },
};

export default Home;
