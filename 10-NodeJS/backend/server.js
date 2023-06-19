import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());
app.listen(port,
    console.log(`Server is listening on port ${port}`)
);