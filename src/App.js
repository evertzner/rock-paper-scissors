import { useState } from "react";
import Modal from "./components/modal/modal.component";

import Header from "./components/header/header.component";
import Board from "./components/board/board.component";
import Rules from "./components/rules/rules.component";
import PlayMode from "./components/play-mode/play-mode.component";

import { ReactComponent as ImageRules } from "./assets/image-rules.svg";
import { ReactComponent as ImageRulesBonus } from "./assets/image-rules-bonus.svg";

import "./App.styles.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [playMode, setPlayMode] = useState("original");
  const [selectedCard, setSelectedCard] = useState("");

  const selectCardHandle = (option) => {
    setSelectedCard(option);
  };

  const rulesDialogHandler = () => {
    setIsOpen(true);
  };

  const playModeHandler = () => {
    setPlayMode(playMode === "original" ? "bonus" : "original");
  };

  return (
    <>
      <div className="app">
        <Header playMode={playMode} score={13} />
        <Board
          playMode={playMode}
          selectedCard={selectedCard}
          onSelectCard={selectCardHandle}
        />
        <div className={`buttons ${selectedCard && "one-child"}`}>
          {!selectedCard && (
            <PlayMode playMode={playMode} onClick={playModeHandler} />
          )}
          <Rules onClick={rulesDialogHandler} />
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {playMode === "original" ? <ImageRules /> : <ImageRulesBonus />}
      </Modal>
    </>
  );
};

export default App;
