const restaurantName = document.getElementById('restaurant-name');
const restaurantAddress = document.getElementById('restaurant-address');
const restaurantZipCode = document.getElementById('restaurant-zipcode');
const restaurantCapacity = document.getElementById('restaurant-capacity');


fetch("http://localhost:3000/api/restaurant")
.then(response => response.json())
.then(restaurantData => {
    getData(restaurantData);
})

function getData(restaurantData){
    console.log(restaurantData)
}