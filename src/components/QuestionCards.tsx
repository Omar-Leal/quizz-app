import React from 'react'

import { AnswerObjet } from '../App'


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
      <p className="number">
        Question: {questionNr} / {totalQuestion}
      </p>

    <p dangerouslySetInnerHTML={{__html: question }} /> 
      <div>
        {answers.map((answer, showAnswers) => (        
             
              <div key={showAnswers} >
                   <button      
                    disabled={userAnswer ? true: false}
                    value={answer}
                    onClick={callback}
                    >
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                   
                    </button>
              </div>
            

        ))}
        { console.log(answers)}
      </div>
    </div>


);

export default QuestionCard;