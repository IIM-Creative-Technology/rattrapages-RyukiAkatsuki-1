const restaurantContainer = document.getElementById('restaurant-container');

fetch("http://localhost:3000/api/restaurant")
  .then(response => response.json())
  .then(restaurantData => {
    console.log(restaurantData);
    displayData(restaurantData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function displayData(restaurantData) {
  for (let i = 0; i < restaurantData.restaurants.length; i++) {
    const restaurant = restaurantData.restaurants[i];

    const restaurantCard = document.createElement('div');
    restaurantCard.classList.add('restaurantCard');

    const name = document.createElement('h3');
    name.innerHTML = restaurant.name;
    restaurantCard.appendChild(name);

    const content = document.createElement('div');
    content.classList.add('restaurantContent');

    const address = document.createElement('p');
    address.innerHTML = "Adresse du restaurant: " + restaurant.address;
    content.appendChild(address);

    const zipcode = document.createElement('p');
    zipcode.innerHTML = "Code postal du restaurant: " + restaurant.zipcode;
    content.appendChild(zipcode);

    const capacity = document.createElement('p');
    capacity.innerHTML = "Capacité du restaurant: " + restaurant.capacity;
    content.appendChild(capacity);

    restaurantCard.appendChild(content);
    restaurantContainer.appendChild(restaurantCard);
  }
}
