import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoBonus } from "../../assets/logo-bonus.svg";

import "./header.styles.scss";

const Header = ({ score, playMode }) => {
  return (
    <div className="header-container">
      <figure className="header-container__logo">
        {playMode === "original" ? <Logo /> : <LogoBonus />}
      </figure>
      <div className="header-container__score">
        <div className="header-container__score--text">SCORE</div>
        <div className="header-container__score--number">{score}</div>
      </div>
    </div>
  );
};

export default Header;
