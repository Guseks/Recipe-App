import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "./components/RecipeList/RecipeList";

import "./App.css";

interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
}

function App() {
  const [myRecipes, setMyRecipes] = useState<RecipeData[]>([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get("http://localhost:3000/api/recipes");
      setMyRecipes(response.data);
    };
    fetchRecipes();
  }, []);
  return (
    <div className="app">
      <RecipeList recipes={myRecipes} />
    </div>
  );
}

export default App;
