import mongoose from 'mongoose';

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

export default mongoose.model('Restaurant', restaurantSchema);