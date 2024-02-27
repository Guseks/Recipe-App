import express from "express";
import { addRecipe, getAllRecipes } from "./manager.js";

export const router = express.Router();

router.get("/recipes", (req, res) => {
  res.status(200).json(getAllRecipes());
});

router.post("/recipes/new", (req, res) => {
  try {
    const recipeInfo = req.body.recipe;
    const newRecipe = addRecipe(recipeInfo);
    res.status(200).json(newRecipe);

  } 
  catch (error) {
    console.error("Failed to add new Recipe", error);
  }
});

