import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css"
import imgg from "./img/free.jpg"
//function player for player card with using destructing 
const Player = ({ name, team, nationality, jerseyNumber, age, src }) => {
  return (
    
    <Card className="player" >
      <Card.Img variant="top" src={src} style={{height:"250px"}} className="img"/>
      <Card.Body>
        <Card.Title className="name" style={{marginTop:"10px"}}> {name}</Card.Title>
        <Card.Text style={{justifyContent:"space-evenly"}}>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name : "Player" ,
  jerseyNumber : "00",
  team : "unknown" ,
  age : "00" ,
  nationality : "from earth",
  src : imgg

}

export default Player;