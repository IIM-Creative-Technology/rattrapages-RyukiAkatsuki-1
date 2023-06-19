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