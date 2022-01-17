import React, { useState } from "react";
import "../css/recipe-search.css";

export default function RecipeSearch(props) {
  const { setsearchTerm } = props;

  // function handlesearch(reqname) {
  //   recipes.map((recipe) => {
  //     if (recipe.name === reqname) {
  //       console.log("Matched");
  //       // renderRecipe(reqname)
  //     }
  //   });
  // }

  return (
    <div className="recipe-search-container">
      <span className="input-style">
        <input
          type="text"
          placeholder="search recipes"
          onchange={(e) => setsearchTerm(e.target.value)}
        />
      </span>
      <span>
        <button
          className="btn btn--primary"
          onClick={() => handlesearch(searchTerm)}
        >
          Search
        </button>
      </span>
    </div>
  );
}
