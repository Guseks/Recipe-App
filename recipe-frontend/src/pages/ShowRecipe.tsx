import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../contexts/RecipeContext";
import styled from "@emotion/styled";

interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  imagePath: string;
}

const Container = styled.div`
  background-color: white;
  padding: 20px 30px;
  border-radius: 10px;
  width: 600px;
  height: 100%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Instructions = styled.ol`
  border-top: 2px solid rgb(100, 100, 100);

  padding: 20px;
`;

const Instruction = styled.li`
  font-weight: 500;
  padding: 5px;
`;

const DescHeadline = styled.h1`
  color: black;
  margin: 0;
`;

const Ingredients = styled.ul`
  padding-top: 0;
`;

const Ingredient = styled.li`
  font-weight: 500;
`;

const ShowRecipe = () => {
  const { id } = useParams();
  const { myRecipes } = useRecipeContext();

  const [recipe, setRecipe] = useState<RecipeData>();

  useEffect(() => {
    if (id) {
      const foundRecipe = myRecipes.find(
        (recipe) => recipe.id === parseInt(id)
      );
      if (foundRecipe) {
        setRecipe(foundRecipe);
      }
    }
  }, [id, myRecipes]);

  return (
    <Container>
      <DescHeadline>{recipe?.name}</DescHeadline>
      <TwoColumns>
        <InfoContainer>
          <h2 style={{ margin: 0, fontWeight: 500 }}>Ingredienser</h2>
          <Ingredients>
            {recipe?.ingredients.map((item, index) => (
              <Ingredient key={index}>{item}</Ingredient>
            ))}
          </Ingredients>
        </InfoContainer>
      </TwoColumns>

      <Instructions type="1">
        <h2
          style={{
            margin: 0,
            fontWeight: 500,
            marginBottom: "10px",
            marginLeft: "-20px",
          }}
        >
          Instruktioner
        </h2>
        {recipe?.instructions.map((item, index) => (
          <Instruction key={index}>{item}</Instruction>
        ))}
      </Instructions>
    </Container>
  );
};

export default ShowRecipe;
