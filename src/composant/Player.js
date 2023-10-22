import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css"
//function player for player card with using destructing 
const Player = ({ name, team, nationality, jerseyNumber, age, src }) => {
  return (
    
    <Card className="player">
      <Card.Img variant="top" src={src} className="img"/>
      <Card.Body>
        <Card.Title className="name">{name}</Card.Title>
        <Card.Text >
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

export default Player;