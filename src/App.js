import React from 'react'
import './App.css'
import react, {useState} from "react";
// import {Progress} from "./components/progress"

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Australia?",
      options: [
        { id: 0, text: "Perth", isCorrect: false },
        { id: 1, text: "Melbourne", isCorrect: false },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Canberra", isCorrect: true },
      ],
    },
    {
      text: "How many seasons of friends is there?",
      options: [
        { id: 0, text: "10", isCorrect: true },
        { id: 1, text: "16", isCorrect: false },
        { id: 2, text: "12", isCorrect: false },
        { id: 3, text: "9", isCorrect: false },
      ],
    },
    {
      text: "What is the Largest Mammal?",
      options: [
        { id: 0, text: "Blue Whale", isCorrect: true },
        { id: 1, text: "African Elephant", isCorrect: false },
        { id: 2, text: "India Elephant", isCorrect: false },
        { id: 3, text: "White rhinoceros", isCorrect: false },
      ],
    },
    {
      text: "Which of these Countries does the Alps not span?",
      options: [
        { id: 0, text: "France", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Italy", isCorrect: false },
        { id: 3, text: "Austra", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
    {
      text: "What year was the Great Fire of London?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "1665", isCorrect: false },
        { id: 2, text: "1858", isCorrect: false },
        { id: 3, text: "1666", isCorrect: true },
      ],
    },
    {
      text: "What country is mountain K2 in?",
      options: [
        { id: 0, text: "Pakistan", isCorrect: true },
        { id: 1, text: "China", isCorrect: false },
        { id: 2, text: "Nepal", isCorrect: false },
        { id: 3, text: "Swizerland", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "In which continent are Chile, Argentina and Brazil?",
      options: [
        { id: 0, text: "North America", isCorrect: false },
        { id: 1, text: "South America", isCorrect: true },
        { id: 2, text: "Europe", isCorrect: false },
        { id: 3, text: "Australasia", isCorrect: false },
      ],
    },
    {
      text: " Which brand of soup featured in one of Andy Warhol’s most famous pop art pieces?",
      options: [
        { id: 0, text: "Heinz", isCorrect: false },
        { id: 1, text: "Campbell’s", isCorrect: true },
        { id: 2, text: "Baxters", isCorrect: true },
        { id: 3, text: "Knorr", isCorrect: false },
      ],
    },
    {
      text: "WThe Mad Hatter and the Cheshire Cat are characters in which famous book?",
      options: [
        { id: 0, text: "Winne-the-Pooh", isCorrect: false },
        { id: 1, text: "Charlotte's Web", isCorrect: false },
        { id: 2, text: "Charlie and the Chocolate Factory", isCorrect: false },
        { id: 3, text: "Alice in Wonderland", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "What measurement scale is used to determine wind speed?",
      options: [
        { id: 0, text: "Beaufort scale", isCorrect: true },
        { id: 1, text: "Richter scale", isCorrect: false },
        { id: 2, text: "Synoptic scale", isCorrect: false },
        { id: 3, text: "Gusting scale", isCorrect: false },
      ],
    },
    {
      text: "In which city were the 1992 Summer Olympics held?",
      options: [
        { id: 0, text: "Atlanta", isCorrect: false },
        { id: 1, text: "Barcelona", isCorrect: true },
        { id: 2, text: "Sydney", isCorrect: false },
        { id: 3, text: "Seoul", isCorrect: false },
      ],
    },
    {
      text: "What other country, besides the US, uses the US dollar as its official currency?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Ecuador", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "How many sides does a Dodecahedron have?",
      options: [
        { id: 0, text: "12", isCorrect: true },
        { id: 1, text: "20", isCorrect: false },
        { id: 2, text: "22", isCorrect: false },
        { id: 3, text: "24", isCorrect: false },
      ],
    },
    {
      text: "The human body is made up of approximately how much water?",
      options: [
        { id: 0, text: "60%", isCorrect: true },
        { id: 1, text: "100%", isCorrect: false },
        { id: 2, text: "50%", isCorrect: false },
        { id: 3, text: "67.9%", isCorrect: false },
      ],
    },
    {
      text: "What is the world’s fastest species of bird??",
      options: [
        { id: 0, text: "Golden eagle", isCorrect: false },
        { id: 1, text: "The Peregrine Falcon", isCorrect: true },
        { id: 2, text: "Frigatebird", isCorrect: false },
        { id: 3, text: "Penguin", isCorrect: false },
      ],
    },
    {
      text: "Which artist famously cut off his own ear??",
      options: [
        { id: 0, text: "Claude Monet", isCorrect: false },
        { id: 1, text: "Salvador Dali", isCorrect: true },
        { id: 2, text: "Vincent Van Gogh", isCorrect: true },
        { id: 3, text: "Pablo Picasso", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h4>
            Question: {currentQuestion + 1} out of {questions.length}
          </h4>

          <h3>Entertainment:Board Game</h3>

          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <div className="questionsContainer">
                <div className="questions">
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}

                </li>
                </div>
                </div>
              );
            })}
          </ul>
          {/* 2. Current Score  */}
          <h2>Score: {score}</h2>
          {/* <ProgressBar
          /> */}
        </div>
      )}
    </div>
  );
}

export default App;