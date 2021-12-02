import React from "react";
import RecepieList from "./RecipeList";
import '../css/app.css'

function App() {
  return (
    <>
    <RecepieList recipes={sampleRecipes}/>
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id : 1,
        name : "chicken",
        amount : '2 pounds',
      },
      {
        id : 2,
        name : "salt",
        amount : '1 tbs',
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id : 1,
        name : "pork",
        amount : '3 pounds',
      },
      {
        id : 2,
        name : "paprika",
        amount : '2 tbs',
      }
    ]
  }
]


export default App;
