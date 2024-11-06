import { useState } from "react";



const Registration = ({ onStartGame }) => {
    const [name, setName] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim()) {
        onStartGame(name); 
      }
    };
  
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Start</button>
        </form>
      </div>
    );
  };

  export default Registration;