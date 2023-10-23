import React from "react";
import Player from "./Player.js";
import players from "./players.js";
import "./style.css";
// playerlist composant function 
const PlayersList = () => {
  return (
    <div className="playerList">
      {/* mapping throw the players into player */}
            {players.map((player) => (
        <Player {...player} />
      ))}
    </div>
  );
};

export default PlayersList;