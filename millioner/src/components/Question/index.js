const Question = ({
    question,
    options,
    onAnswer,
    selectedAnswer,
    correctAnswer
  }) => {
    return (
      <div>
        <h2>{question}</h2>
        {options.map((option, index) => {
          let className = '';
          
          if (selectedAnswer) {
            if (option === correctAnswer) {
              className = 'correct'; 
            } else if (option === selectedAnswer && option !== correctAnswer) {
              className = 'incorrect'; 
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