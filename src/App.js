import React from "react";
import PlayersList from "./composant/PlayerList.js";
import "./composant/style.css";
function App() {
  return (
    // our app function  
    <div className="App">
      <h1>Player List</h1>
      {/* import player list composant */}
      <PlayersList/>
    </div>
  );
}

export default App;