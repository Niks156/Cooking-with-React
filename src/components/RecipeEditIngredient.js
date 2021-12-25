import React from "react";

export default function RecipeEditIngredient(props) {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={(e) => handleChange({ amount: e.target.value })}
      />
      <button
      onClick={() => handleIngredientDelete(ingredient.id)}
      className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}
