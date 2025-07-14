import React from "react";

const ThemeContext = React.createContext({
    isDark: true,
    themeChange: () => { }
})

export default ThemeContext