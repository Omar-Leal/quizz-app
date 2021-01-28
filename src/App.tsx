import React, { useState } from 'react'
import { fetchQuizQuestions } from './API'

import QuestionCard from './components/QuestionCards'

//types
import { QuestionState, Difficulty } from './API';

type AnswerObjet = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS:number = 10;

const App = () => {
  const [ loading, setLoading ] = useState(false);
  const [ questions, setQuestions ] = useState<QuestionState[]>([]);
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

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start"
      onClick={startTrivia}
      >
       START
      </button>
      ) : null}
      {!gameOver ? <p className="score">Score</p> : null}
      {loading ? <p>Loading Question... </p> : null }

      {/* <QuestionCard
      questionNr={number + 1}
      totalQuestion={TOTAL_QUESTIONS}
      question={questions[number].question}
      answer={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]: undefined}
      callback={checkAnswer}
      
      /> */}

      <button
      className="next" 
      onClick={nextQuestion}>      
        Next Question
      </button>  

    </div>
  );
}

export default App;
