import express from "express";
import { getAllRecipes } from "./manager.js";

export const router = express.Router();

router.get("/recipes", (req, res) => {
  res.status(200).json(getAllRecipes());
});

