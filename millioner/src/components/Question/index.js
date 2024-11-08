import "./index.css";

const Question = ({
  question,
  options,
  onAnswer,
  selectedAnswer,
  correctAnswer,
}) => {
  return (
    <div className="options">
      <h2>{question}</h2>
      {options.map((option, index) => {
        let className = "";
        if (selectedAnswer && option === selectedAnswer) {
            if (index === correctAnswer) {
              className = "correct";
            } else {
              className = "incorrect";
            }
        }

        return (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={className}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Question;
