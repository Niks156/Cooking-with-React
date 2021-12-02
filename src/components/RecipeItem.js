import React from 'react'
import IngredientList from './IngredientList';

export default function RecipeItem(props) {
    const {
        name,
        servings,
        cookTime,
        instructions,
        ingredients
    } = props;
    //Object Destructuring.
    return (
        <div>
            <div>
                <h3>{name} </h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>{instructions} </div>
            </div>
            <div>
                <span>Ingredients:</span>
                <div>
                    <IngredientList ingredients={ingredients} /> 
                </div>
            </div>
        </div>
    )
}
