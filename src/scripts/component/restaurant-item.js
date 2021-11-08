import DataSource from "../data/data-source";

const restaurant = () => {
  const listRestaurant = document.getElementById('list-restaurant')
  
  const getDataRest = async () => {
    try {
      const result = await DataSource.getDataRestaurant();
      renderResultRestaurant(result);
    } catch(message){
      fallbackResult(message);
    }
  }
  
  
  const renderResultRestaurant = (results) => {
    listRestaurant.innerHTML = "";
    results.forEach((club) => {
        const {name, pictureId, city, rating} = club;

        listRestaurant.innerHTML += `
        <div class="card">
                <img src="${pictureId}" alt="" tabindex= "0">
                <div class="card-desc">
                    <div class="dflex">
                        <p class="rating" tabindex= "0"><i class="fas fa-star"></i> ${rating}</p>
                        <p class="location" tabindex= "0"><i class="fas fa-map-marker-alt"></i> ${city}</p>
                    </div>
                    <h1 tabindex= "0">${name}</h1>
                    <p tabindex= "0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
          `
    })
  };

  const fallbackResult = (message) => {
    listRestaurant.innerHTML = "";
    listRestaurant.innerHTML += `
    <p>${message}</p>
    `;

  }
  getDataRest();
}

export default restaurant;