import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import WriteReview from '../../utils/write-review-initiator';
import Loading from '../templates/template-loading';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';

const Detail = {
  async render() {
    return `
        <section id="products" class="products">
            <div id="loading"></div>
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title">Detail Restaurant</h2>
                </header>

                <div id="detail-list" class="detail-list"></div>
            </div>
            <div id="likeButtonContainer"></div>
        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const main = document.querySelector('.products');
    const loading = document.querySelector('#loading');
    const detailContainer = document.querySelector('#detail-list');

    loading.innerHTML = Loading();
    main.style.display = 'none';

    try {
      const data = await RestaurantSource.detailRestaurant(url.id);
      detailContainer.innerHTML += restaurantDetailTemplate(data.restaurant);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        data,
      });

      loading.style.display = 'none';
      main.style.display = 'block';
    } catch (error) {
      loading.style.display = 'none';
      main.style.display = 'block';
      detailContainer.innerHTML = `${error}, Check your Connection!`;
    }

    const btnWriteReview = document.querySelector('#submit-review');
    const btnLoadingReview = document.querySelector('.submit-loading');
    const inputNameReview = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');

    btnLoadingReview.style.display = 'none';
    btnWriteReview.addEventListener('click', (event) => {
      event.preventDefault();
      btnLoadingReview.style.display = 'inline-block';
      if (inputNameReview.value === '' || inputReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Input cannot be empty');
        inputNameReview.value = '';
        inputReview.value = '';
        btnLoadingReview.style.display = 'none';
      } else {
        WriteReview(url, inputNameReview.value, inputReview.value);
        inputNameReview.value = '';
        inputReview.value = '';
        btnLoadingReview.style.display = 'none';
      }
    });
  },
};

export default Detail;
