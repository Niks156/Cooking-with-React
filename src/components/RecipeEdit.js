import React from "react";
import "../css/recipe-edit.css";
import RecipeEditIngredient from "./RecipeEditIngredient";

export default function RecipeEdit({ recipe }) {
  return (
    <div>
      <div className="recipe-edit">
        <div className="recipe-edit__remove-btn-container">
          <button className="btn recipe-edit__remove-btn">&times;</button>
        </div>
        <div className="recipe-edit__details-grid">
          <label htmlFor="name" className="recipe-edit__label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={recipe.name}
            //It is the name of the selected Recipe.
            className="recipe-edit__input"
          />
          <label htmlFor="cooktime" className="recipe-edit__label">
            CookTime
          </label>
          <input
            type="text"
            name="cooktime"
            id="cooktime"
            value={recipe.cookTime}
            className="recipe-edit__input"
          />
          <label htmlFor="servings" className="recipe-edit__label">
            Servings
          </label>
          <input
            type="number"
            min="1"
            name="servings"
            id="servings"
            value={recipe.servings}
            className="recipe-edit__input"
          />
          <label htmlFor="instructions" className="recipe-edit__label">
            Instructions
          </label>
          <textarea
            type="text"
            name="instructions"
            id="instructions"
            className="recipe-edit__input"
          >
            {recipe.instructions}
          </textarea>
        </div>
        <br />
        <label className="recipe-edit__label">Ingredients</label>
        <div className="recipe-edit__ingredients-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {recipe.ingredients.map(ingredient => 
            <RecipeEditIngredient key={ingredient.id} ingredient={ingredient} />
          )}
        </div>
        <div className="recipe-edit__add-ingredient-btn-container">
          <button className="btn btn--primary">Add Ingredients</button>
        </div>
      </div>
    </div>
  );
}
