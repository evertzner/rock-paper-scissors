import "./play-mode.styles.scss";

const PlayMode = ({ playMode, onClick }) => {
  const onPlayMode = () => {
    onClick();
  };
  return (
    <div className="btn-outline play-mode" onClick={onPlayMode}>{`play ${
      playMode === "original" ? "bonus" : "original"
    } mode`}</div>
  );
};

export default PlayMode;
