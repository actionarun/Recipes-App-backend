import RecipeDetail from "../Models/RecipeSchema.js"

export const createRecipe = async (req, res) => {
    try {
        const newRecipe = new RecipeDetail(req.body);
        await newRecipe.save();
        res.status(200).json(newRecipe);
    } catch (error) {
        console.log(error);
    }
}

export const getRecipeDetail = async (req, res) => {
    try {
        const recipe = await RecipeDetail.find()
        res.status(200).json(recipe)
    } catch (error) {
        console.log(error);
      }
}


export const getRecipeById = async (req,res) => {
    try {
        const RecipeId = req.params.id;
        const recipe = await RecipeDetail.findById(RecipeId);
        if (!recipe) {
            return res.status(404).json({message:"Recipe Not Found!"})
        }
        res.status(200).json(recipe)
    } catch (error) {
        console.log(error);
        
    }
}


 export const UpdateRecipeBYId = async (req,res)=>{
    try {
        const RecipeId =req.params.id;
        const {name,ingredients, instructions}=req.body;
        const result = await RecipeDetail.updateOne({ _id: RecipeId },{name,ingredients, instructions})
        if (result.matchedCount === 0) {
            return res.status(404).json({message:"Recipe Not Found"})
        }
        const updateRecipe =await RecipeDetail.findById(RecipeId)
         res.status(200).json(updateRecipe)
        
    } catch (error) {
        console.log(error)
    }
}



export const DeleteRecipeById = async (req, res) => {
    try {
        const RecipeId = req.params.id;
        const deletedRecipe = await RecipeDetail.findByIdAndDelete(RecipeId);
        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe Not Found" });
        }

        res.status(200).json({ message: "Recipe Deleted Successfully", deletedRecipe});

    } catch (error) {
        console.log(error);
    }
};