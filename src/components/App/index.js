import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questionData } from "../../libs/questionData";
import { useState, useReducer } from "react";

const initalState = { quizResults: [] };

//Create reducer function which well be used with useReducer ✅
//Take state and action ✅
//Return a new immutable state ✅
//ADD_ANSWER ✅
// - new state updates quizResults array ✅
// - add the user's choice ✅
// - make payload available ✅
// - this action is whatever we dispatch in the app ✅

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ANSWER": { 
      const newAnswer = action.payload;
      return {quizResults:[...state.quizResults, newAnswer]}
    }

    case "RESET_ANSWERS":{
      return {quizResults: []};
    }

    default:
      return state;
  }
}

function App() {
  const [result, setResult] = useState("...pending");
  const [state, dispatch] = useReducer(reducer, initalState);

  function handleAnswerClick(choiceId) {
    console.log(`handleAnswerClick ran, user clicked choice "${choiceId}"`);
    dispatch({
      type: "ADD_ANSWER", payload: choiceId
    });
    console.log(state)
  }

  function handleResetButtonClick() {
    console.log(state)// TODO: Write your code for step 6 here!
    dispatch({type: 'RESET_ANSWERS'})
  }

  function calculateResults() {
    // TODO: Write your code for step 7 here!
    /*
      -use state from useReducer 
    - collect all the answers 
    - calculate which choice (a,b,c or d) was clicked the most
    - set the result state with it
    */
    const answerArr = [...state.quizResults] 
    console.log(answerArr)

    let mf = 1;
    let m = 0;
    let item;
    for (let i=0; i<answerArr.length; i++)
        {
        for (let j=i; j<answerArr.length; j++)
        {
                if (answerArr[i] == answerArr[j])
                 m++;
                if (mf < m)
                {
                  mf = m; 
                  item = answerArr[i];
                }
        }
        m = 0;
}
console.log(`${item} ( ${mf} times ) `) ;
setResult(mf) 

  //   let max = 0
  //   let maxChar ='';
  //   answerArr.forEach(function(char){
  //     for (let i = 0; i < answerArr.length; i++){
        
  //     if(answerArr.length > max) {
  //       max = answerArr.length
  //       maxChar = char
  //     }
  //    }
  //   })
  //  return maxChar
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
