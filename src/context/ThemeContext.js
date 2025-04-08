import { createContext, useReducer } from "react";
const ThemeContext = createContext();

const initialData = { theme: localStorage.getItem("theme") || "Light" };
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const toggleTheme = (theme) => {
    localStorage.setItem("theme", theme)
    dispatch({ type: "TOGGLE_THEME", payload: theme });
  };

  return (
     <ThemeContext.Provider value={{ ...firstState, toggleTheme }}>
      {children}
     </ThemeContext.Provider>
  );
}

export default ThemeContext;
