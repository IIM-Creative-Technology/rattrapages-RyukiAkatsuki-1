import express from 'express';
import { getAllRestaurants, addRestaurant, updateRestaurant } from '../controllers/restaurant-controller';

const restaurantRouter = express.Router();

restaurantRouter.get('/', getAllRestaurants);
restaurantRouter.post('/add', addRestaurant);
restaurantRouter.put('/update/:id', updateRestaurant);

export default restaurantRouter;