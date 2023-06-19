import mongoose from "mongoose";

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);