import "./index.css";


const Result = ({ isWinner, score, username }) => (
  <div className="game-over">
    <h1>{isWinner ? "You Are Winner!" : "Game Over!"}</h1>
    <p>{username}, you won: {score} </p>
  </div>
);

export default Result;