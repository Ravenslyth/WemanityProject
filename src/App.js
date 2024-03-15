import * as React from "react";

//Bar menu
import BarMenu from "./Components/BarMenu";
//Composant pour la conversion
import InterFace from "./Components/Interface";

import "./App.css";

function App() {
  return (
    <div className="App" data-testid="DOM-component">
      <header className="App-header">
        <BarMenu />
        <InterFace />
      </header>
    </div>
  );
}

export default App;
