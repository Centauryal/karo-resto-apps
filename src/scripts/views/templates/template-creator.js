import CONFIG from '../../globals/config';

const restaurantItemTemplate = (restaurant) => `
<div class="product-item">
    <a href="#/detail/${restaurant.id}">
        <div class="shadow-gradient">
            <img class="product-thumbnail lazyload" src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" 
                title="${restaurant.name}" alt="${restaurant.name}" loading="lazy" crossorigin="anonymous"/>
        </div>
        <div class="product-title"><h1>${restaurant.name}</h1></div>
        <div class="content-list">
            <div class="title-item">
                <h3 class="content-title">${restaurant.city}</h3>
                <h3>${restaurant.rating} / 5</h3>
            </div>
            <p>${restaurant.description.slice(0, 100)}...</p>
        </div>
    </a>
</div>
`;

const restaurantDetailTemplate = (detail) => `
<div class="detail-item">
    <div>
        <img class="detail-thumbnail lazyload" src="${CONFIG.BASE_IMAGE + detail.pictureId}"
        title="${detail.name}" alt="${detail.name}" crossorigin="anonymous"/>
    </div>
    <div class="detail-info">
        <h2>${detail.name}</h2>
        <div class="title-item">
            <h3>${detail.address}, ${detail.city}</h3>
            <h3 class="detail-rating">${detail.rating} / 5</h3>
        </div>
        <p>${detail.description}</p>
        <div class="title-item">
            ${detail.categories.map((category) => `
            <p class="detail-category">${category.name}</p>
            `).join('')}
        </div>
    </div>
    <div class="menu-title">
        <h2>Restaurant Menu</h2>
    </div>
    <div class="detail-food">
        <h3>Food Menu</h3>
        <div class="food-item">
            ${detail.menus.foods
    .map((food) => `
    <p>${food.name}</p>
    `).join('')}
        </div>
    </div>
    <div class="detail-drink">
        <h3>Drinks Menu</h3>
        <div class="drink-item">
            ${detail.menus.drinks
    .map((drink) => `
    <p>${drink.name}</p>
    `).join('')}
        </div>
    </div>

    <div class="menu-title">
        <h2>Write A Review</h2>
        <form class="form-review">
            <div class="form-item">
                <label for="inputName" class="form-label">Name</label>
                <input name="inputName" type="text" class="form-control" id="inputName" placeholder="Your name" required>
            </div>
            <div class="form-item">
                <label for="inputReview" class="form-label">Review</label>
                <textarea name="inputReview" type="text" class="form-control" id="inputReview" placeholder="Write your review" rows="3" required></textarea>
            </div>
        </form>
        <div class="btn-submit">
        <button id="submit-review" class="btn-review" type="submit">
            <i class="submit-loading fa fa-spinner fa-spin"></i>Create Review
        </button>
        </div>
    </div>
    <hr class="menu-title">

    <div class="menu-title detail-review">
        ${detail.customerReviews.reverse()
    .map((review) => `
        <div class="review-item">
            <div class="review-title">
                <h3><i class="fa fa-user-circle"></i>${review.name}</h3>
                -
                <p>${review.date}</p>
            </div>
            <div class="review-desc">
                <p>${review.review}</p>
            </div>
        </div>
        `).join('')}
    </div>
</div>
`;

const likeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="btn-like">
    <i class="far fa-heart" aria-hidden="true"></i>
</button>
`;

const unlikeButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="btn-like">
    <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  restaurantItemTemplate,
  restaurantDetailTemplate,
  likeButtonTemplate,
  unlikeButtonTemplate,
};
