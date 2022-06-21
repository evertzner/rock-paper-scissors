import "./play-mode.styles.scss";

const PlayMode = ({ playMode, onClick }) => {
  const onPlayMode = () => {
    onClick();
  };
  return (
    <div className="btn-outline" onClick={onPlayMode}>{`play ${
      playMode === "original" ? "bonus" : "original"
    } mode`}</div>
  );
};

export default PlayMode;
