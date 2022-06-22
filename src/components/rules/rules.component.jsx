import "./rules.styles.scss";

const Rules = ({ onClick }) => {
  const onRulesDialog = () => {
    onClick();
  };

  return (
    <div className="btn-outline rules" onClick={onRulesDialog}>
      RULES
    </div>
  );
};

export default Rules;
