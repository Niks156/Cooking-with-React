import React, { useContext } from "react";
import RecipeItem from "./RecipeItem";
import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  // const {
  // recipes,
  // handleRecipeAdd,
  // handleRecipeDelete
  // } = props
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return (
            <RecipeItem
              key={recipe.id}
              // handleRecipeDelete = {handleRecipeDelete}
              {...recipe}
            />
          );
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button onClick={handleRecipeAdd} className="btn btn--primary">
          AddRecipe
        </button>
      </div>
    </div>
  );
}
