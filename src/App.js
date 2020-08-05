import React , {useState, useEffect} from 'react';
 import {QuestionAPI}  from './components';


const API_URL = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple'; 
function App() {

const [questions, setQuestions] = useState([]);

useEffect( ()=> {
fetch(API_URL)
.then((res) => res.json())
.then( (data)=>{
  setQuestions(data.results);
});
}, []); 


const handleAnswer = (clickedAnswer) => {
  // here we will check for the answer
  


};


  return  questions.length > 0 ? (
    
    <div  className="container">
        {/* <div className='bg-white text-pink-800 p-8 rounded-lg shadow-md'>
        <h2 className="text-3xl"> {questions[0].question} </h2>
      </div>
      <div className=' flex flex-wrap justify-around  mt-6'>
        <button className="bg-white w-5/12 p-4  text-pink-500 font-semibold rounded shadow"> {questions[0].correct_answer}</button>
        <button className="bg-white p-4 w-5/12 text-pink-500 font-semibold rounded shadow"> {questions[0].incorrect_answers[0]} </button>
        <button className="bg-white p-4 w-5/12 text-pink-500 font-semibold mt-3 rounded shadow"> {questions[0].incorrect_answers[1]}</button>
        <button className="bg-white p-4 w-5/12 text-pink-500 font-semibold mt-3 rounded shadow"> {questions[0].incorrect_answers[2]}</button>

      </div> */}
    <QuestionAPI data={questions[0]} />
   </div>
  )
    : (
        <h3 className="text-white text-2xl">Loading...</h3>
      );
    
      }
export default App;
