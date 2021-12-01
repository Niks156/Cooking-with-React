import React, { useState } from "react";
import Counter from "./Counter";

export const themecontext = React.createContext();

function App() {
  const [theme, setTheme] = useState("blue");

  return (
    <themecontext.Provider value={{ backgroundColor: theme }}>
      <Counter />
      <button
        onClick={() =>
          setTheme((prevtheme) => {
            return prevtheme === "blue" ? "purple" : "grey";
          })
        }
      >
        Toggle background
      </button>
    </themecontext.Provider>
  );
}

export default App;
