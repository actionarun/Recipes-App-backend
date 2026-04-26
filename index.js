import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Database/Recipeconfig.js';
import RecRouter from './Routers/RecipeRoute.js'

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connectDB();


app.use('/api', RecRouter)

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})

