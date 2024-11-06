const Result = ({ score, username }) => (
  <div>
    <h1>Game Over!</h1>
    <p>{username}, you won: {score} </p>
  </div>
);

export default Result;