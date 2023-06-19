import Restaurant from "../models/Restaurant";

export const getAllRestaurants = async (req, res) => {
    let restaurants;
    try {
        restaurants = await Restaurant.find();
    } catch (err) {
        console.log(err);
    }
    if(!restaurants) {
        return res.status(404).json({message: "No Mongoorestaurants found"});
    }
    res.status(200).json({restaurants});
}

export const addRestaurant = async (req, res) => {
    const {name, address, zipcode, capacity} = req.body;
    const newRestaurant = new Restaurant({
        name, 
        address, 
        zipcode, 
        capacity
    });
    try {
        await newRestaurant.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(200).json({newRestaurant});
}

export const updateRestaurant = async (req, res) => {
    const {address, zipcode, capacity} = req.body;
    const restaurantId = req.params.id;
    let updatedRestaurant;
    try {
        updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, {
            address, 
            zipcode, 
            capacity
        });
    } catch (err) {
        return console.log(err);
    }
    if(!updatedRestaurant) {
        return res.status(404).json({message: "Unable to update restaurant"});
    }
    res.status(200).json({updatedRestaurant});
}