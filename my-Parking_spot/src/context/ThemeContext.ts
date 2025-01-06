import React from "react";
interface ThemeContextProps{
    theme: string;
    toggleTheme: () => void;
}
const ThemeContext = React.createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {},

});
export default ThemeContext;