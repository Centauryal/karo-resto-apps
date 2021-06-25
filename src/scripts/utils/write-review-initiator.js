import RestaurantSource from '../data/restaurant-source';

const WriteReview = (url, name, review) => {
  const inputData = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.writeReviewRestaurant(inputData);

  const reviewContainer = document.querySelector('.detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="review-item">
        <div class="review-title">
            <h3><i class="fa fa-user-circle"></i>${name}</h3>
            -
            <p>${date}</p>
        </div>
        <div class="review-desc">
            <p>${review}</p>
        </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default WriteReview;
