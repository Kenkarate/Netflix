import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title="Netflix Originals" />
      <RowPost title="Action" isSmall/>
    </div>
    
  );
}

export default App;
