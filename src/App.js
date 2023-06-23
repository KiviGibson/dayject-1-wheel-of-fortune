
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [items,setItems] = useState([]);
  const [now,setNow] = useState(0)
  const [text,setText] = useState("")
  const wheel = useRef(<div/>)
  const button = useRef(<button/>)
  const [result,setResult] = useState("")
  const add = () =>{
    if(text=="") return;
    setItems(e=>e.concat([text]))
    setText("")
  }
  const remove = (val) =>{
    let a = items.filter(e=>e!=val)
    setItems(a)
  }
  const spin = () =>{
    if(items.length<2) return;
    
    button.current.disabled = true
    let unit = 360/items.length;
    let force = (Math.random()*unit)*(Math.random()*items.length)+unit+600
    wheel.current.style.transform = `rotate(${now+force}deg)`
    setNow(v=>v+force)
    setTimeout(()=>{setResult(items[parseInt(now%360/(360/items.length))]);button.current.disabled = false},6000)
  }
  let jsx = <></>
  jsx = items.map(e=><span className='item'><button className='button-2' onClick={()=>remove(e)}>x</button>{e}</span>)
  return (
    <div className="App">
      <div className='wheel-side'>
        <div className='wheel' ref={wheel}/>
        <h1>{result}</h1>
        <div className='arrow'/>
      </div>

      <div className='menu'>
        <div className='list'>
          {jsx}
        </div>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <button className='button-1' onClick={add}>ADD</button>
      <button className='button-1' onClick={spin} ref={button}>SPIN</button>
      </div>
      
    </div>
  );
}

export default App;
