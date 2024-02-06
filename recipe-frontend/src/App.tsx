import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [myRecipes, setMyRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get("http://localhost:3000/api/recipes");
      setMyRecipes(response.data);
    };
    fetchRecipes();
  }, []);
  return (
    <div className="app">
      <h2>My Recipes</h2>
      {myRecipes}
    </div>
  );
}

export default App;
