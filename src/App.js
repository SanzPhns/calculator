import './App.css';
import React,{ useState } from "react";

function Calculator(){
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['+', '-', '*', '/', '.', 'X']

  const updateCalc = value => {
    if (calc === '' && value === '.'){
      value = '0.';
    }
    else if(calc.includes('.') && value === '.'){
      return;
    }
    else if(
      (ops.includes(value) && calc === '') ||
      (calc === '' && value === '0') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
      return;
    }
    if(value === 'X'){
      value = '*';
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toFixed(2))
    }
  }

  const calculate = ()=>{
    setCalc(eval(calc).toFixed(2));
  }
  
  function clearDisplay(){
    setCalc('');
    setResult('');
  }

  return(
    <div className="calculator">

     <div className="display">
      <span className='resultSpan'>({result? result: ''})</span>
      &nbsp;
      {calc || 0}
     </div>
     

     <div className="buttons">

     <div className="row">
     <button onClick={()=>updateCalc('1')}>1</button>
       <button onClick={()=>updateCalc('2')}>2</button>
       <button onClick={()=>updateCalc('3')}>3</button>
       <button onClick={()=>updateCalc('+')} className='operator'>+</button>
     </div>

     <div className="row"> 
     <button onClick={()=>updateCalc('4')}>4</button>
       <button onClick={()=>updateCalc('5')}>5</button>
       <button onClick={()=>updateCalc('6')}>6</button>
       <button onClick={()=>updateCalc('-')} className='operator'>-</button>
     </div>

     <div className="row">     
     <button onClick={()=>updateCalc('7')}>7</button>
       <button onClick={()=>updateCalc('8')}>8</button>
       <button onClick={()=>updateCalc('9')}>9</button>
       <button onClick={()=>updateCalc('X')} className='operator'>x</button>
     </div>

     <div className="row">
     <button onClick={()=>updateCalc('0')}>0</button>
       <button onClick={()=>updateCalc('.')}>.</button>
       <button onClick={calculate} className='equalButton'>=</button>
       <button onClick={()=>updateCalc('/')} className='operator'>/</button>
      
     </div>
     <div className='row'>       
       <button onClick={clearDisplay} className='lastRow'>CLEAR</button>
  
       </div>
    
        </div>
     </div>
  );
}

function App(){
  return(
    <Calculator/>
  );
}

export default App;