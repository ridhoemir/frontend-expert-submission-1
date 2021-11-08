class DataSource {
    static getDataRestaurant(){
        return fetch(`./DATA.json`)
        .then(response => response.json())
        .then(responseJson => responseJson.restaurants);
    }

    static getDataMeal(){
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(response => response.json())
        .then(responseJson => responseJson.meals);
    }
}

export default DataSource;
