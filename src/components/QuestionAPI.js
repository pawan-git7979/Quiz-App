import React from "react";


const Button = ({ answer}) => (
  <button className="bg-white w-5/12 p-6 mt-5 text-pink-500 font-semibold rounded shadow"> {answer}</button>
);
const QuestionAPI = ({handleAnswer, data:{question, correct_answer , incorrect_answers }}) =>{


  const shuffledAnswer = [correct_answer, ...incorrect_answers];
  
  return (
    <div>
      <div className='bg-white text-pink-800 p-8 rounded-lg shadow-md'>
        <h2 className="text-3xl " dangerouslySetInnerHTML={{__html:question}}  handleAnswer ={handleAnswer} />
      </div>
      <div className=' flex flex-wrap justify-around  mt-6'>
       <Button onclick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]}/>
       <Button onclick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]} />
       <Button  onclick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
       <Button onclick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/>
      </div>
    </div>

  );
}
export default QuestionAPI;