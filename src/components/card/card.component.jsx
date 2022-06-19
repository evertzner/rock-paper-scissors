import { ReactComponent as Paper } from "../../assets/icon-paper.svg";
import { ReactComponent as Scissors } from "../../assets/icon-scissors.svg";
import { ReactComponent as Rock } from "../../assets/icon-rock.svg";

import "./card.styles.scss";

const Card = ({ customClass, option, onClick }) => {
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

  const onSelectCard = () => {
    onClick(option);
  };

  return (
    <div
      className={
        customClass ? `card-container ${customClass}` : "card-container"
      }
      onClick={onSelectCard}
    >
      <div className="outer-circle" data-option={option}>
        <div className="inner-circle">
          <figure className="card-container__figure">
            {renderSwitch(option)}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Card;
