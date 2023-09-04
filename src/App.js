import React from "react";
import AppRoutes from "./AppRoutes"; // Import the AppRoutes component

 import Navbar from "./navbar";


function App() {
  return (
    <div className="App">
      <h1 style={{ display : "flex", justifyContent:"space-around"}}>TODO APP</h1>
     
        <Navbar />
        <AppRoutes /> {/* Include the AppRoutes component */}
 
    </div>
  );
}

export default App;
