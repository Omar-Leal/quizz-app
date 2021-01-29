import React, { useState } from 'react'
import { fetchQuizQuestions } from './API'

// Styles 
import './styles/main.css'

import QuestionCard from './components/QuestionCards'

//types
import { QuestionsState, Difficulty } from './API'



export type AnswerObjet = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS:number = 10;

const App = () => {
  const [ loading, setLoading ] = useState(false);
  const [ questions, setQuestions ] = useState<QuestionsState[]>([]);
  const [ number, setNumbers ] = useState(0);
  const [ userAnswers, setUserAnswers ] = useState<AnswerObjet[]>([]);
  const [ score, setScore ] = useState(0);
  const [ gameOver, setGameOver ] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumbers(0);
      setLoading(false);


  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      //check the user answer
      const answer = e.currentTarget.value;
      // Then, was the answer correct?
      const correct= questions[number].correct_answer === answer;
      // add score if the user answer is correct!!!
      if (correct) setScore((prev) => prev + 1);

      const answerObjet = {
        question: questions[number].question,
        answer, 
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObjet]);

    }
  };

  const nextQuestion = () => {
    
    //Moving on the last Q if this is not the last
    const nextQ = number + 1;

        if(nextQ === TOTAL_QUESTIONS) {
          setGameOver(true);
        } else {
          setNumbers(nextQ);
        }
  }


  return (
    <div className="App">
      <h1 className="App__title">REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start"
      onClick={startTrivia}
      >
       START
      </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score} </p> : null}
      {loading ? <p>Loading Question... </p> : null }
       
      {!loading && !gameOver && (
        
        <QuestionCard
        questionNr={number + 1}
        totalQuestion={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswer}      
        />  

      )}

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?   (
        <button
        className="next" 
        onClick={nextQuestion}>      
          Next Question
        </button> 

      ) :null }

 
      
       
       

    </div>
  );
}

export default App;
