import { useRecipeContext } from "../contexts/RecipeContext";
import axios from "axios";

interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  imagePath: string;
}

const NewRecipe = () => {
  const { setMyRecipes, myRecipes } = useRecipeContext();
  const handleAddNew = async () => {
    try {
      const recipeInfo = {
        name: "Test Recipe",
        description: "A recipe to test functionality of app",
        ingredients: ["Mjölk", "Svamp", "Zucchini", "lök"],
        instructions: [
          "Hacka svamp",
          "Skiva Zucchini och dela i halvor",
          "Skala och hacka lök, vitlök",
          "Fräs grönsaker",
          "Ha i grädde + Mjölk",
          "Salt, peppar och eventuella kryddor",
        ],
        category: "pasta",
      };
      const response = await axios.post(
        "http://localhost:3001/api/recipes/new",
        {
          recipe: recipeInfo,
        }
      );
      const newRecipe: RecipeData = response.data;
      setMyRecipes([...myRecipes, newRecipe]);
    } catch (error) {
      console.error("Failed to add new Recipe", error);
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Page for adding new Recipe</h1>
      <button onClick={() => handleAddNew()}>Add test Recipe</button>
    </div>
  );
};

export default NewRecipe;
