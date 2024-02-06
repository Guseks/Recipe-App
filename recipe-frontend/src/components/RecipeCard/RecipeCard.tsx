import React from "react";
import "./recipeCard.css";

interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
}

interface RecipeCardProps {
  recipe: RecipeData;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p className="recipe-desc">{recipe.description}</p>
      <p className="ingredients"> Ingredienser: </p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li className="ingredient" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
