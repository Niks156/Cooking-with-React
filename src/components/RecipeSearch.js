import React from "react";
import "../css/recipe-search.css";

export default function RecipeSearch(props) {
  const { recipes } = props;

  // function renderRecipe (reqRecipename) {
  //     const recipeupdate = recipes.filter(recipe => {
  //         recipe.name === reqRecipename
  //     })
  // }

  function handlesearch(reqname) {
    recipes.map((recipe) => {
      if (recipe.name === reqname) {
        console.log("Matched");
        // renderRecipe(reqname)
      }
    });
  }

  return (
    <div className="recipe-search-container">
      <span className="input-style">
        <input type="text" placeholder="search recipes" onInput={(e) => console.log(e.target.value)} />
      </span>
      <span>
        <button
          className="btn btn--primary"
          // onClick={kijhbkj}
        >
          Search
        </button>
      </span>
    </div>
  );
}
