import React from 'react';

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestion: number;
}


const QuestionCard: React.FC<Props> = ({
    question,
    answer,
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
        {answer.map(answer => (

           <div>
              <button 
              disabled={userAnswer}
              onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer}} />
              </button>
            </div>  

        ))}
      </div>
    </div>


);

export default QuestionCard;