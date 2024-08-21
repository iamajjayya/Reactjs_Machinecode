// import { createContext, useContext, useState } from "react";

// const ThemeContext =  createContext('light')

// function useTheme () {
//     return useContext(ThemeContext);
// }

// export  function ThemeProvider({children}) {
//  const [theme, setTheme] = useState('light');

//  const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light'?'dark':'light'));
//  }

//  return (
//     <ThemeContext.Provider value={ { theme , toggleTheme } }>
//          {children}
//     </ThemeContext.Provider>
//  )

// }

// export default function ThemeButton() {
//  const { theme , toggleTheme} = useTheme();

// return (
//     <>
//     <h1>Toggle Button</h1>
//     <button onClick={toggleTheme}
//     style={{
//         backgroundColor: theme === 'light'? '#000' : '#fff',
//         color : theme === 'light'? '#fff' : '#000',
//         cursor: 'pointer'
//     }}

//     >Toggle {theme === 'light'?'dark':'light'} theme </button>
//     </>
// )

// }

import React, { useState } from "react";

const Theme = () => {
  const [theme, setThem] = useState("light");

  const handletoggle = () => {
    setThem((prevThem) => (prevThem === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <button onClick={handletoggle} 
      
      style={{
        backgroundColor : theme === 'light' ? '#000' : '#fff',
        color : theme === 'light' ? '#fff' : '#000',
      }}>
        Theme {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Theme;
