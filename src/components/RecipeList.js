import React from "react";
import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes }) {
    return (
        <div className="recipe-list">
        <div>
        {recipes.map(recipe => {
            return <RecipeItem key={recipe.id} {...recipe} />
        })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary">AddRecipe</button>
        </div>
        </div>
    )
}