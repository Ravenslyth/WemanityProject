import * as React from "react";

//Bar menu
import BarMenu from "./Components/BarMenu";
//Composant text présentation
import Content from "./Components/Content";
//Composant pour la conversion
import "./App.css";

function App() {
  return (
    <div className="App" data-testid="DOM-component">
      <BarMenu />
      <div className="Content-container">
        <Content />
      </div>
    </div>
  );
}

export default App;
