import { ReactComponent as Paper } from "../../assets/icon-paper.svg";
import { ReactComponent as Scissors } from "../../assets/icon-scissors.svg";
import { ReactComponent as Rock } from "../../assets/icon-rock.svg";

import "./card.styles.scss";

const Card = ({ customClass, option }) => {
  const renderSwitch = (option) => {
    switch (option) {
      case "paper":
        return <Paper />;
      case "scissors":
        return <Scissors />;
      case "rock":
        return <Rock />;
      default:
        return <></>;
    }
  };
  return (
    <div className={`card-container ${customClass}`} data-option={option}>
      <figure className="card-container__figure">{renderSwitch(option)}</figure>
    </div>
  );
};

export default Card;
