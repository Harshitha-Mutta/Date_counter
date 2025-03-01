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
  function handleReset(){
    setCount(0)
    setStep(1);
  }
  const date=new Date();
  date.setDate(date.getDate()+count);
  return (
    <div>  
      <div className="stepper">    
          {/* <button className="button" onClick={handleStepMinus}>-</button>
          Step:{step}
          <button className="button" onClick={handleStepPlus}>+</button> */}
          <input type="range" min="0" max="10" value={step} onChange={e=>setStep(Number(e.target.value))}/>{step}
      </div>
      <div className="stepper">
        <button className="button" onClick={handleCountMinus}>-</button>
        <input type="text" value={count} onChange={e=>(setCount(Number(e.target.value)))}/>
        <button className="button" onClick={()=>{setCount(c=>c+step)}}>+</button>
      </div>
      <div>
        <p>{count===0&& `Today is ${date.toDateString()}}`}</p>
        <p>{count>0 &&`${count} days from today is ${date.toDateString()}`}</p>
        <p>{count<0 &&`${count*-1} days ago was ${date.toDateString()}`}</p>
      </div>
      <div>
        {(count!==0 || step!==1) ?<button onClick={handleReset}>Reset</button>: null}
      </div>
    </div>
  );
}

export default App;
