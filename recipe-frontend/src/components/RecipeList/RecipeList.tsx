import React from "react";
import "./recipeList.css";
import RecipeCard from "../RecipeCard/RecipeCard";

interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
}

interface RecipeListProps {
  recipes: RecipeData[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <div>
      <h1>My Recipes</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li className="recipe-list-item" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RecipeList;
