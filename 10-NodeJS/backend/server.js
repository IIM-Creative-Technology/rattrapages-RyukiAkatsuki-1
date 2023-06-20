import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import restaurantRouter from './routes/restaurant-route.js';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    });
})
.catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});

app.use(express.json());
app.use("/api/restaurant", restaurantRouter);