import React, { useContext, useState } from "react";
import RecipeItem from "./RecipeItem";
import { RecipeContext } from "./App";
// import RecipeSearch from "./RecipeSearch";
import "../css/recipe-search.css";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="recipe-list">
      {/* <RecipeSearch setsearchTerm={setsearchTerm} /> */}
      <div className="recipe-search-container">
        <span className="input-style">
          <input
            type="text"
            placeholder="Search recipes"
            onChange={(e) => setsearchTerm(e.target.value)}
          />
        </span>
        <span>
          {/*<button className="btn btn--primary" onClick={() => handlesearch(searchTerm)}>Search</button> */}
        </span>
      </div>

      <div>
        {recipes
          .filter((recipe) => {
            if (searchTerm === "") {
              return recipe;
            } else if (
              recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return recipe;
            }
            else return recipe;
          })
          .map((recipe) => {
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
