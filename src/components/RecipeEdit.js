import React, { useContext } from "react";
import "../css/recipe-edit.css";
import RecipeEditIngredient from "./RecipeEditIngredient";
import { RecipeContext } from "./App";
import { v4 as uuidv4 } from "uuid";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newingredient = {
      id: uuidv4(),
      name: "",
      amount: " ",
    };
    handleChange({ ingredients: [...recipe.ingredients, newingredient] });
  }

  function handleIngredientDelete(id) {
    const ingredchange = recipe.ingredients.filter(ingred => ingred.id !== id)
    handleChange({ingredients : ingredchange})
  }

  return (
    <div>
      <div className="recipe-edit">
        <div className="recipe-edit__remove-btn-container">
          <button
            onClick={() => handleRecipeSelect(undefined)}
            className="btn recipe-edit__remove-btn"
          >
            &times;
          </button>
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
            onInput={(e) => handleChange({ name: e.target.value })}
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
            onInput={(e) => handleChange({ cookTime: e.target.value })}
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
            onInput={(e) =>
              handleChange({ servings: parseInt(e.target.value) || "" })
            }
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
            onInput={(e) => handleChange({ instructions: e.target.value })}
            value={recipe.instructions}
          />
        </div>
        <br />
        <label className="recipe-edit__label">Ingredients</label>
        <div className="recipe-edit__ingredients-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {recipe.ingredients.map((ingredient) => (
            <RecipeEditIngredient
              key={ingredient.id}
              handleIngredientChange={handleIngredientChange}
              handleIngredientDelete={handleIngredientDelete}
              ingredient={ingredient}
            />
          ))}
        </div>
        <div className="recipe-edit__add-ingredient-btn-container">
          <button
          onClick={() => handleIngredientAdd()} 
          className="btn btn--primary"
          >
            Add Ingredients
          </button>
        </div>
      </div>
    </div>
  );
}
