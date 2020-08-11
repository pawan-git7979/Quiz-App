import React from "react";


// const Button = ({ answer, className}) => (
//   <button className={`bg-white w-5/12 p-6 mt-5 text-pink-500 font-semibold rounded shadow} ${className} `}>
//    {answer} </button> 
//      );
const QuestionAPI = ({handleAnswer, handleNextQuestion , showAnswers , data:{question, correct_answer , answers }}) =>{


 
  

  return (
    <div className="flex flex-col">
      <div className='bg-white text-pink-800 p-8 rounded-lg shadow-md'>
        <h2 className="text-3xl " dangerouslySetInnerHTML={{__html:question}}  handleAnswer ={handleAnswer} />
      </div>
      <div className=' flex flex-wrap justify-around  mt-6'>
      
       
       {answers.map( answer => {
         const bgcolor = showAnswers ? answer=== correct_answer ? 'bg-green-800' : 'bg-red-800' : 'bg-fff';
        const textColor = showAnswers ? 'text-white-500' : 'text-pink-500' ; 

        return(
         <button  className={` ${bgcolor} transparent: 'transparent'  .font-bold text-1xl bg-white 
         hover:bg-aqua-500 w-5/12 p-6 mt-5 ${textColor} font-semibold rounded shadow`} 
           onClick={() => handleAnswer(answer)}  dangerouslySetInnerHTML={{__html:answer}} />
         
      
       )})
      }
      { showAnswers &&
       <button onClick={handleNextQuestion} 
         className=' bg-purple ml-auto .opacity-100 hover:bg-indigo-500 w-5/12 .font-bold p-3 mt-6 font-semibold rounded shadow'>
         Next question >
       </button>
}
      </div>
    </div>

  );
}
export default QuestionAPI;