import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate } from '../templates/template-creator';
import skeletonRestaurantTemplate from '../templates/template-skeleton';

const Home = {
  async render() {
    return `
          <section id="products" class="products">
            <div class="container">
              <header class="section-header">
                <h2 class="section-title">Our Restaurant</h2>
              </header>

              <div id="loading"></div>
              <div id="product-list" class="product-list">
                ${skeletonRestaurantTemplate(10)}
              </div>
            </div>
          </section>
        `;
  },

  async afterRender() {
    const listContainer = document.querySelector('#product-list');

    listContainer.innerHTML = '';

    try {
      const data = await RestaurantSource.listRestaurant();
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restaurantItemTemplate(restaurant);
      });
    } catch (error) {
      listContainer.innerHTML = `${error}, Check your Connection!`;
    }
  },
};

export default Home;
