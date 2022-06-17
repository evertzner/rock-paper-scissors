import Header from "./components/header/header.component";
import Board from "./components/board/board.component";
import Rules from "./components/rules/rules.component";

import "./App.styles.scss";

const App = () => {
  return (
    <div className="app">
      <Header score={13} />
      <Board />
      <Rules />
    </div>
  );
};

export default App;
