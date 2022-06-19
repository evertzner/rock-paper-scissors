import { useState } from "react";
import Card from "../card/card.component";
import CardSelection from "../card-selection/card-selection.component";

import { ReactComponent as Triangle } from "../../assets/bg-triangle.svg";

import "./board.styles.scss";

const Board = () => {
  const [selectedCard, setSelectedCard] = useState("");

  const onSelectCardHandler = (option) => {
    setSelectedCard(option);
  };

  return (
    <>
      {selectedCard !== "" ? (
        <CardSelection selectedCard={selectedCard} />
      ) : (
        <>
          <div className="board__selection">
            <figure>
              <Triangle className="board__selection__triangle" />
            </figure>
            <Card
              customClass="board__selection__paper"
              option="paper"
              onClick={onSelectCardHandler}
            />
            <Card
              customClass="board__selection__scissors"
              option="scissors"
              onClick={onSelectCardHandler}
            />
            <Card
              customClass="board__selection__rock"
              option="rock"
              onClick={onSelectCardHandler}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Board;
