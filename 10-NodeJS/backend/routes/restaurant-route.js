import express from 'express';
import { getAllRestaurants, addRestaurant, updateRestaurant, deleteRestaurant } from '../controllers/restaurant-controller.js';

const restaurantRouter = express.Router();

restaurantRouter.get('/', getAllRestaurants);
restaurantRouter.post('/add', addRestaurant);
restaurantRouter.put('/update/:id', updateRestaurant);
restaurantRouter.delete('/delete/:id', deleteRestaurant);

export default restaurantRouter;