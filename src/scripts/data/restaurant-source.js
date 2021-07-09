import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

const RestaurantSource = {
  async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  },

  async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  },

  async writeReviewRestaurant(data) {
    const responseRaw = await fetch(API_ENDPOINT.WRITE_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return responseRaw;
  },
};

export default RestaurantSource;
