import React from "react";
import AllPage from "../../pages/AllPage";
import './App.css'
import ThemeProvider from "../../context/ThemeProvider";


const App = () => {

  return (
 <ThemeProvider>
    <AllPage />
   </ThemeProvider>
  
  )
};
export default App;
