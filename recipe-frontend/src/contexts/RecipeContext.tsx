import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

interface RecipeContextProps {
  children: React.ReactNode;
}

interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  imagePath: string;
}

interface RecipeContextValue {
  myRecipes: RecipeData[];
  setMyRecipes: React.Dispatch<React.SetStateAction<RecipeData[]>>;
}

const RecipeContext = createContext<RecipeContextValue | undefined>(undefined);

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within RecipeProvider");
  }
  return context;
};

export const RecipeProvider = ({ children }: RecipeContextProps) => {
  const [myRecipes, setMyRecipes] = useState<RecipeData[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<RecipeData[]>(
          "http://localhost:3001/api/recipes"
        );
        setMyRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ myRecipes, setMyRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
