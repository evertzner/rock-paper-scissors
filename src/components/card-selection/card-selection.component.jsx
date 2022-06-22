import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { gameValuesActions } from "../../store/game-values-slice";
import Card from "../card/card.component";

import "./card-selection.styles.scss";

const options = ["paper", "rock", "scissors", "spock", "lizard"];
const movements = [
  { play1: "paper", play2: "scissors", winner: "scissors" },
  { play1: "rock", play2: "scissors", winner: "rock" },
  { play1: "paper", play2: "rock", winner: "paper" },
  { play1: "rock", play2: "lizard", winner: "rock" },
  { play1: "lizard", play2: "spock", winner: "lizard" },
  { play1: "spock", play2: "scissors", winner: "spock" },
  { play1: "lizard", play2: "paper", winner: "lizard" },
  { play1: "spock", play2: "rock", winner: "spock" },
  { play1: "scissors", play2: "lizard", winner: "scissors" },
  { play1: "paper", play2: "spock", winner: "paper" },
];

const CardSelection = ({ selectedCard, playMode, onClick }) => {
  const dispatch = useDispatch();

  const [opponent, setOpponent] = useState("");
  const [result, setResult] = useState("");
  const [whowins, setWhowins] = useState("");

  const onPlayAgain = () => {
    onClick();
  };

  const analyzeGame = () => {
    if (selectedCard === opponent) {
      setResult("draw");
    } else {
      setResult(
        movements
          .filter(({ play1, play2, winner }) => {
            if (
              (play1 === selectedCard && play2 === opponent) ||
              (play2 === selectedCard && play1 === opponent)
            ) {
              return winner;
            }
            return "";
          })
          .map(({ winner }) => winner)
      );
    }
  };

  const showResults = () => {
    if (result !== "draw") {
      if (selectedCard === result[0]) {
        setWhowins("player");
        dispatch(gameValuesActions.win());
      }
      if (opponent === result[0]) {
        setWhowins("cpu");
      }
    } else {
      setWhowins("draw");
    }
  };

  const resultSwitch = () => {
    switch (whowins) {
      case "player":
        return "YOU WIN";
      case "cpu":
        return "YOU LOSE";
      case "draw":
        return "DRAW";
      default:
        return <></>;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const numberOfOptions = playMode === "original" ? 3 : 5;
      const rndInt = Math.floor(Math.random() * numberOfOptions) + 1;
      setOpponent(options[rndInt - 1]);
    }, 1000);
  }, []);

  useEffect(() => {
    if (opponent !== "") analyzeGame();
  }, [opponent]);

  useEffect(() => {
    if (result !== "") showResults();
  }, [result]);

  return (
    <div className={`card-selection-container ${result && "played"}`}>
      <p className="player-text">YOU PICKED</p>
      <Card
        customClass={`player-card ${whowins === "player" && "winner"}`}
        option={selectedCard}
        onClick={() => {}}
      />
      {result && (
        <div className="game-result">
          <p className="game-result__text">{resultSwitch()}</p>
          <div className="game-result__play-again-button" onClick={onPlayAgain}>
            PLAY AGAIN
          </div>
        </div>
      )}
      <p className="opponent-text">THE HOUSE PICKED</p>
      {opponent ? (
        <Card
          customClass={`opponent-card ${whowins === "cpu" && "winner"}`}
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
