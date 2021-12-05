import React, { useState } from "react";
import RecepieList from "./RecipeList";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = React.createContext();

function App() {
  const [recipe, setRecipe] = useState(sampleRecipes);

  const funcrecipecontext = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newrecipe = {
      id: uuidv4(),
      name: "new",
      servings: 2,
      cookTime: "1:10",
      instructions: "insturct",
      ingredients: [{ id: uuidv4(), name: "ingred1", amount: "1 pounds" }],
    };
    setRecipe([...recipe, newrecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipe(recipe.filter((currentrecipe) => currentrecipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={funcrecipecontext}>
      <RecepieList recipes={recipe} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "salt",
        amount: "1 tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "paprika",
        amount: "2 tbs",
      },
    ],
  },
];

export default App;
