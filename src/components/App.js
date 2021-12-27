import React, { useState, useEffect } from "react";
import RecepieList from "./RecipeList";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipe, setRecipe] = useState(sampleRecipes);
  const selectedRecipe = recipe.find(
    (recipe) => recipe.id === selectedRecipeId
  );
  const Local_Storage_key = "CWR.Recipe";

  useEffect(() => {
    const recipejson = localStorage.getItem(Local_Storage_key);
    if (recipejson != null) setRecipe(JSON.parse(recipejson));
  }, []);
  // It will execute only once and that is when the page is loaded.

  useEffect(() => {
    localStorage.setItem(Local_Storage_key, JSON.stringify(recipe));
  }, [recipe]);

  const funcrecipecontext = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  function handleRecipeAdd() {
    const newrecipe = {
      id: uuidv4(),
      name: "new",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [{ id: uuidv4(), name: "", amount: " " }],
    };
    setSelectedRecipeId(newrecipe.id);
    setRecipe([...recipe, newrecipe]);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id)
      setSelectedRecipeId(undefined);
    setRecipe(recipe.filter((currentrecipe) => currentrecipe.id !== id));
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeChange(id, recipenew) {
    const newRecipes = [...recipe];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipenew;
    setRecipe(newRecipes);
  }

  return (
    <RecipeContext.Provider value={funcrecipecontext}>
      <RecepieList recipes={recipe} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
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
