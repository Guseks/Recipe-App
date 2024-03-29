import "./recipeCard.css";
import { useNavigate } from "react-router-dom";

interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  imagePath: string;
}

interface RecipeCardProps {
  recipe: RecipeData;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  /*
  <p className="ingredients"> Ingredienser: </p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li className="ingredient" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    */

  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p className="recipe-desc">{recipe.description}</p>
      <button className="show-details" onClick={() => handleClick()}>
        Mer info
      </button>
    </div>
  );
};

export default RecipeCard;
