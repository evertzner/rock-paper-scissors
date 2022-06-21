import { useState } from "react";
import Card from "../card/card.component";
import CardSelection from "../card-selection/card-selection.component";

import { ReactComponent as Triangle } from "../../assets/bg-triangle.svg";
import { ReactComponent as Pentagon } from "../../assets/bg-pentagon.svg";

import "./board.styles.scss";

const Board = ({ playMode, selectedCard, onSelectCard }) => {
  const onSelectCardHandler = (option) => {
    onSelectCard(option);
  };

  const onPlayAgainHandler = () => {
    onSelectCard("");
  };

  return (
    <>
      {selectedCard !== "" ? (
        <CardSelection
          selectedCard={selectedCard}
          playMode={playMode}
          onClick={onPlayAgainHandler}
        />
      ) : (
        <>
          <div className={`board__selection ${playMode}`}>
            {playMode === "original" ? (
              <>
                <figure>
                  <Triangle />
                </figure>
                <Card
                  customClass={`${playMode}__paper`}
                  option="paper"
                  onClick={onSelectCardHandler}
                />
                <Card
                  customClass={`${playMode}__scissors`}
                  option="scissors"
                  onClick={onSelectCardHandler}
                />
                <Card
                  customClass={`${playMode}__rock`}
                  option="rock"
                  onClick={onSelectCardHandler}
                />
              </>
            ) : (
              <>
                <figure>
                  <Pentagon />
                </figure>
                <Card
                  customClass={`${playMode}__spock`}
                  option="spock"
                  onClick={onSelectCardHandler}
                />
                <Card
                  customClass={`${playMode}__scissors`}
                  option="scissors"
                  onClick={onSelectCardHandler}
                />
                <Card
                  customClass={`${playMode}__paper`}
                  option="paper"
                  onClick={onSelectCardHandler}
                />
                <Card
                  customClass={`${playMode}__rock`}
                  option="rock"
                  onClick={onSelectCardHandler}
                />
                <Card
                  customClass={`${playMode}__lizard`}
                  option="lizard"
                  onClick={onSelectCardHandler}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Board;
