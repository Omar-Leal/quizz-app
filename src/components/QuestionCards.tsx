import React from 'react'

import { AnswerObjet } from '../components/Questions'


type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObjet | undefined;
  questionNr: number;
  totalQuestion: number;
}


const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestion,

}) => (


    <div>
      <div className="questions__container">
            <h3 className="number">
              Question: {questionNr} / {totalQuestion}
            </h3>
            <p className="question__card" dangerouslySetInnerHTML={{__html: question }} /> 

      </div>  

      <div className="questionCards__container">
        {answers.map((answer, showAnswers) => (        
             
              
                   <button key={showAnswers} 
                   className="questionCards__buttons"      
                    disabled={userAnswer ? true: false}
                    value={answer}
                    onClick={callback}
                    >
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                   
                    </button>
              
            

        ))}
        
      </div>
    </div>


);

export default QuestionCard;