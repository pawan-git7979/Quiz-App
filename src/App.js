 import React , {useState, useEffect} from 'react';
 import {QuestionAPI}  from './components';
 //import logo from './images/congrats-pic.jpeg';


const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'; 
function App() {

const [questions, setQuestions] = useState([]);
const [currentIndex, setCurrentIndex ] = useState(0);
const [score, setScore] = useState(0);
const [questionsover, setQuestionsOver] = useState(false);
const [showAnswers, setShowAnswers] = useState(false);

useEffect( ()=> {
fetch(API_URL)
.then((res) => res.json())
.then( (data)=>{
  const questions = data.results.map((question) =>
  ({
  ...question,
  answers:[question.correct_answer,...question.incorrect_answers].sort(()=>
    Math.random()-0.5),
  }));
 setQuestions(questions);
});
}, []); 


const handleAnswer = (clickedAnswer) => {
  
 
if(!showAnswers){
  if(clickedAnswer=== questions[currentIndex].correct_answer)
  {
    //increase the score by one.
    setScore(score+1);
  }
}

  setShowAnswers(true);
  
  // here we will check for the answer
  
//  if correct show next ques.
// change the score
};
const handleNextQuestion = () => {
   
  setShowAnswers(false);
  
   let setIndex= currentIndex +1;
   
   setCurrentIndex(setIndex);
   
   if(setIndex >= questions.length){
      setQuestionsOver(true);
    }

}


  return questionsover ? (
     <div> 
       <div className= 'bg-fff text-3xl text-black-500'>     
       <h1 className="text-red-500 text-5xl mb-5">Congratulations..!!</h1>
       Quiz Over ... Your Score is : <span className="text-black">{score}</span>  
       </div>   
       </div>
  ) : (questions.length > 0 ? (
    
     <div  className="container">
       
           <QuestionAPI data= {questions[currentIndex]}
           handleAnswer={handleAnswer}
           handleNextQuestion ={ handleNextQuestion}
           showAnswers = {showAnswers} />
           
  
      </div>
   )
    : (
        <h3 className="text-white text-2xl">Loading...</h3>
      ));
    
      }
export default App;
