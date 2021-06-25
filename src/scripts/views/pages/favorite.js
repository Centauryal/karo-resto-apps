import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { restaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
            <section id="products" class="products">
                <div id="loading"></div>
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Your Favorite Restaurant</h2>
                    </header>

                    <div id="product-list" class="product-list"></div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteContainer = document.querySelector('#product-list');

    if (data.length === 0) {
      favoriteContainer.innerHTML = `
          <h1 class="favorite-placeholder">You don't have any Favorite Restaurant</h1>
          `;
    }

    data.forEach((restaurant, index) => {
      favoriteContainer.innerHTML += restaurantItemTemplate(restaurant, index);
    });
  },
};

export default Favorite;
