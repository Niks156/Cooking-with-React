import React, { useContext } from "react";
import RecipeItem from "./RecipeItem";
import { RecipeContext } from "./App";
// import RecipeSearch from "./RecipeSearch";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      {/* <RecipeSearch {...recipes}/> */}
      <div>
        {recipes.map((recipe) => {
          return <RecipeItem key={recipe.id} {...recipe} />;
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
