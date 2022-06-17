import Card from "../card/card.component";

import { ReactComponent as Triangle } from "../../assets/bg-triangle.svg";

import "./board.styles.scss";

const Board = () => {
  return (
    <div className="board">
      <figure>
        <Triangle className="board__triangle" />
      </figure>
      <Card customClass="board__paper" option="paper" />
      <Card customClass="board__scissors" option="scissors" />
      <Card customClass="board__rock" option="rock" />
    </div>
  );
};

export default Board;
