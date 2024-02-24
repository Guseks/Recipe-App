import "./recipeList.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useRecipeContext } from "../../contexts/RecipeContext";

const RecipeList = () => {
  const { myRecipes } = useRecipeContext();
  return (
    <div>
      <h1 className="recipe-headline">My Recipes</h1>
      <ul className="recipe-list">
        {myRecipes.map((recipe) => (
          <li className="recipe-list-item" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RecipeList;
