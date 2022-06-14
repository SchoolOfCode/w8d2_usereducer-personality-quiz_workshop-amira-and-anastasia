import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questionData } from "../../libs/questionData";
import { useState, useReducer } from "react";

const initalState = {quizResults: []}

//Creaye a reducer function which well be used with useReducer 
//Take state and action 
//Return a new immutable state
//ADD_ANSWER 
// - new state updates quizResults array 
// - add the user's choice 
// - make payload available
// - this action is whatever we dispatch in the app

const action = {
  type: 'ADD_ANSWER',
  type: 'RESET_ANSWERS'

}

function reducer (state, action) {
switch (action.type) {
  case 'ADD_ANSWER':
  const newResult = action.result
  return {...state, newResult} 

  // case 'RESET ANSWERS':

  default: state;
}

return {...state}

}


function App() {
  const [result, setResult] = useState("...pending");

  function handleAnswerClick(choiceId) {
    console.log(`handleAnswerClick ran, user clicked choice "${choiceId}"`);
    // TODO: Write your code for step 5 here!
  }

  function handleResetButtonClick() {
    // TODO: Write your code for step 6 here!
  }

  function calculateResults() {
    // TODO: Write your code for step 7 here!
  }

  return (
    <main className="app">
      <h1>Personality Quiz</h1>
      <ol>
        {questionData.map((question) => (
          <QuestionDisplay
            key={question.questionId}
            question={question.questionText}
            choices={question.choices}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </ol>
      <button onClick={calculateResults}>Calculate results!</button>
      <ResultsDisplay result={result} />
      <button onClick={handleResetButtonClick}>Reset results!</button>
    </main>
  );
}



export default App;
