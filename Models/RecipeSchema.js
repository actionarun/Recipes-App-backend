import mongoose from "mongoose";

const recipe = mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions: [String]
})

const RecipeDetail = mongoose.model("RecipeDetail", recipe);
export default RecipeDetail;