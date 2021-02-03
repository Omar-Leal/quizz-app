import React, { useState } from 'react'
import { fetchQuizQuestions } from '../API'

// Styles 
import '../styles/main.css'

import QuestionCard from '../components/QuestionCards'
import Loader from '../components/Loader'

//types
import { QuestionsState, Difficulty } from '../API'



export type AnswerObjet = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS:number = 10;

const Questions = () => {
  const [ loading, setLoading ] = useState(false);
  const [ questions, setQuestions ] = useState<QuestionsState[]>([]);
  const [ number, setNumbers ] = useState(0);
  const [ userAnswers, setUserAnswers ] = useState<AnswerObjet[]>([]);
  const [ score, setScore ] = useState(0);
  const [ gameOver, setGameOver ] = useState(true);

 

  const startTrivia = async () => {
    setGameOver(false);
      setLoading(true);

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
    const answer = e.currentTarget.value;      
    const correct= questions[number].correct_answer === answer;      

    if(!gameOver) {     
      
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
    const nextQ = number + 1;

      if (nextQ === TOTAL_QUESTIONS) {
        
        setGameOver(true);        
      } else {
        setNumbers(nextQ);
      }

  }

   console.log(gameOver);

  return (
    <div className="App">
      <div className="App__main">
      
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        startTrivia()
      ) : null}
      {!gameOver ? <h2 className="score">Score: {score} </h2> : null}
      {loading ? <p> <Loader /> </p> : null }
      </div> 
       
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

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?         
          ( <div className="next__container">
                <button
                  className="next" 
                  onClick={nextQuestion}>                           
                  Next Question
                </button>         
            </div>
          ) : null}   

               
          
          
      
      
             
             

    </div>
  );
}

export default Questions;
