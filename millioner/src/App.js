import React, { useState, useEffect, useRef } from "react";
import questions from "./questions";
import Question from "./components/Question";
import Timer from "./components/Timer";
import Result from "./components/Result";
import Registration from "./components/Registration";
import './App.css'; 

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); 
  const [timer, setTimer] = useState(30); 
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [username, setUsername] = useState(""); 

  const musicRef = useRef(null); 

  const currentQuestion = questions[currentQuestionIndex];
  const { question, options, correctAnswer } = currentQuestion;

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.loop = true; 
      if (!gameOver && username) {
        musicRef.current.play(); 
      } else {
        musicRef.current.pause(); 
      }
    }

    if (timer > 0 && !gameOver) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0 && username ) {
      setGameOver(true); 
    }
  }, [timer, gameOver, username]);

  const handleAnswer = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer); 

    if (selectedAnswer === currentQuestion.options[correctAnswer]) {
      setScore(score + 1000); 
    } else {
      setGameOver(true); 
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); 
        setTimer(30); 
      }, 1500); 
    } else {
      setTimeout(() => setGameOver(true), 1500); 
    }
  };

  const handleStartGame = (name) => {
    setUsername(name);
    setGameOver(false); 
    setCurrentQuestionIndex(0); 
    setScore(0); 
    setTimer(30); 
  };

  const handleRestartGame = () => {
    setGameOver(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(30);
  };

  return (
    
<div>
      <audio ref={musicRef} src="music.mp3" /> 

      {!username ? (
        <Registration onStartGame={handleStartGame} />
      ) : gameOver ? (
        <Result score={score} username={username} />
      ) : (
        <>
          <h1>Who wants to become a millionaire?</h1>
          <p>Gamer: {username}</p>    
          <div className="score-board">
            <p> Count: {score}</p> 
          </div>
          <Timer time={timer} />
          <Question
            question={question}
            options={options}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            correctAnswer={correctAnswer}
          />
        </>
      )}

     
      {gameOver && (
        <div className="restart-button-container">
          <button className="restart-button" onClick={handleRestartGame}>
            Restart
          </button>
        </div>
      )}
    </div>
  
  )   
};

export default App;
