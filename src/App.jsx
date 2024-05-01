import React, { useState } from 'react';
import Quiz from './components/quiz/Quiz';
import Quiz2 from './components/quiz/Quiz2';

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showQuiz2, setShowQuiz2] = useState(false);

  const handleQuizButtonClick = () => {
    setShowQuiz(true);
    setShowQuiz2(false);
  };

  const handleQuiz2ButtonClick = () => {
    setShowQuiz(false);
    setShowQuiz2(true);
  };

  return (
    <div>
      <button
        onClick={handleQuizButtonClick}
        style={buttonStyle}
      >
        Open Quiz1
      </button>
      <button
        onClick={handleQuiz2ButtonClick}
        style={buttonStyle}
      >
        Open Quiz2
      </button>
      {showQuiz && <Quiz />}
      {showQuiz2 && <Quiz2 />}
    </div>
  );
};

// CSS styles for the buttons
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: '#fff',
  margin: '10px',
  cursor: 'pointer',
};

export default App;