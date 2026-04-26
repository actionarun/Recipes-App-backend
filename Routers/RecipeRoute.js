import express from 'express';
import { createRecipe, DeleteRecipeById, getRecipeById, getRecipeDetail, UpdateRecipeBYId } from '../Controllers/RecipeController.js';

const router = express.Router();

router.post("/create-recipe",createRecipe);
router.get("/recipe-details",getRecipeDetail);
router.get("/recipe-details/:id",getRecipeById);
router.put("/recipe-update/:id",UpdateRecipeBYId);
router.delete("/recipe-delete/:id",DeleteRecipeById);


export default router;