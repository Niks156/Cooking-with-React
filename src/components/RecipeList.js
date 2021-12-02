import React from "react";
import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes }) {
    return (
        <>
        <div>
        {recipes.map(recipe => {
            return <RecipeItem key={recipe.id} {...recipe} />
        })}
        </div>
        <button>AddRecipe</button>
        </>
    )
}