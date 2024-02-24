import React from "react";
import { useParams } from "react-router-dom";

const ShowRecipe = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 style={{ color: "white" }}>Show specific recipe details here!</h1>
      <p style={{ color: "white" }}>Showing details for recipe with id {id}</p>
    </div>
  );
};

export default ShowRecipe;
