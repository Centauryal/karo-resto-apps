const skeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
        <div class="product-item">
            <div class="shadow-gradient">
                    <img class="product-thumbnail" src="./images/placeholder.png" 
                        title="skeleton" alt="skeleton" loading="lazy" crossorigin="anonymous"/>
                </div>
                <div class="skeleton"><h1>Lorem ipsum dolor sit.</h1></div>
                <div class="content-list">
                    <div class="title-item">
                        <h3 class="skeleton">Lorem ipsum dolor sit.</h3>
                        <h3 class="skeleton">Lorem ipsum dolor sit.</h3>
                    </div>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur...</p>
                </div>
        </div>
        `;
  }

  return template;
};

export default skeletonRestaurantTemplate;
