import { useState, useEffect } from "react";

import Card from "../card/card.component";

import "./card-selection.styles.scss";

const CardSelection = ({ selectedCard }) => {
  const options = ["paper", "rock", "scissors"];

  const [opponent, setOpponent] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const rndInt = Math.floor(Math.random() * 3) + 1;
      setOpponent(options[rndInt - 1]);
    }, 10);
  }, []);

  return (
    <div className="card-selection-container">
      <p className="player-text">YOU PICKED</p>
      <Card
        customClass={"player-card"}
        option={selectedCard}
        onClick={() => {}}
      />
      <p className="opponent-text">THE HOUSE PICKED</p>
      {opponent ? (
        <Card
          customClass={"opponent-card"}
          option={opponent}
          onClick={() => {}}
        />
      ) : (
        <div className="opponent-card-skeleton"></div>
      )}
    </div>
  );
};

export default CardSelection;
