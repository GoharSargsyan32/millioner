import React, { useState } from 'react';
import questions from './questions';
import './App.css';

function App() {
    const [playerName, setPlayerName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
    const [helpUsed, setHelpUsed] = useState(false);
    const [hiddenOptions, setHiddenOptions] = useState([]);

    
    const registerPlayer = () => {
        if (playerName.trim() === '') {
            alert("Enter your name to continue!");
            return;
        }
        setIsRegistered(true);
    };

    const loadNextQuestion = () => {
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setFiftyFiftyUsed(false);
            setHelpUsed(false);
            setHiddenOptions([]); 
        } else {
            alert(`Congratulation, ${playerName}! You won!`);
            resetGame();
        }
    };

    const resetGame = () => {
        setIsRegistered(false);
        setPlayerName('');
        setCurrentQuestionIndex(0);
        setFiftyFiftyUsed(false);
        setHelpUsed(false);
        setHiddenOptions([]);
    };

    const checkAnswer = (selectedIndex) => {
        const question = questions[currentQuestionIndex];
        if (selectedIndex === question.correctAnswer) {
            alert("You are right!");
        } else {
            alert("Wrong answer, but you can continue game.");
        }
        loadNextQuestion();
    };

    const useFiftyFifty = () => {
        if (fiftyFiftyUsed) {
            alert("50/50 hint has already been used.");
            return;
        }
        setFiftyFiftyUsed(true);

        const question = questions[currentQuestionIndex];
        const incorrectOptions = question.options
            .map((option, index) => (index !== question.correctAnswer ? index : null))
            .filter(index => index !== null);

       
        const optionsToHide = incorrectOptions.sort(() => Math.random() - 0.5).slice(0, 2);
        setHiddenOptions(optionsToHide);
    };

    const showCorrectAnswer = () => {
        if (helpUsed) {
            alert("The hint 'Help Hall' has already been used.");
            return;
        }
        setHelpUsed(true);
        const question = questions[currentQuestionIndex];
        alert(`Right answer: ${question.options[question.correctAnswer]}`);
    };

    if (!isRegistered) {
        return (
            <div className="App">
                <h1>Who wants to become a millionaire?</h1>
                <div>
                    <label>Enter your name: </label>
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                    <button onClick={registerPlayer}>Start</button>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestionIndex];
    const displayedOptions = question.options.map((option, index) => {
        if (hiddenOptions.includes(index)) return null; // 50/50
        return (
            <li key={index}>
                <button onClick={() => checkAnswer(index)}>{option}</button>
            </li>
        );
    });

    return (
        <div className="App">
            <h1>Who wants to become a millionaire?</h1>
            <h2>Hello, {playerName}!</h2>
            <div className="question">
                <p>{question.question}</p>
                <ul>{displayedOptions}</ul>
            </div>
            <button onClick={useFiftyFifty} disabled={fiftyFiftyUsed}>50/50</button>
            <button onClick={showCorrectAnswer} disabled={helpUsed}>Help Hall</button>
        </div>
    );
}

export default App;
