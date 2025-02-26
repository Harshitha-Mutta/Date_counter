import './App.css';
import React,{useState} from 'react';
function App() {
  const [step,setStep]=useState(1)
  const [count,setCount]=useState(0);
  function handleStepMinus(){
    setStep(step-1);
  }
  function handleStepPlus(){
    setStep(step+1);
  }
  function handleCountMinus(){
    setCount(count-step)
  }
  
  const date=new Date();
  date.setDate(date.getDate()+count);
  return (
    <div>  
      <div className="stepper">    
          <button className="button" onClick={handleStepMinus}>-</button>
          Step:{step}
          <button className="button" onClick={handleStepPlus}>+</button>
      </div>
      <div className="stepper">
        <button className="button" onClick={handleCountMinus}>-</button>
        Count:{count}
        <button className="button" onClick={()=>{setCount(c=>c+step)}}>+</button>
      </div>
      <div>
        <p>{count===0&& `Today is ${date.toDateString()}}`}</p>
        <p>{count>0 &&`${count} days from today is ${date.toDateString()}`}</p>
        <p>{count<0 &&`${count*-1} days ago was ${date.toDateString()}`}</p>
      </div>
      
    </div>
  );
}

export default App;
