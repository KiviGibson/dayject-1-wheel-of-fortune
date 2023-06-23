
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [items,setItems] = useState(["adam","maciek","sylvia","toster","kivi"]);
  const [now,setNow] = useState(0)
  const wheel = useRef(<div/>)
  const button = useRef(<button/>)

  const spin = () =>{
    button.current.disabled = true
    let unit = 360/items.length;
    let force = (Math.random()*unit)*(Math.random()*3)+unit+600
    wheel.current.style.transform = `rotate(${now+force}deg)`
    setNow(v=>v+force)
    setTimeout(()=>{console.log(items[parseInt(now%360/(360/items.length))]);button.current.disabled = false},6000)
  }
  return (
    <div className="App">
      <div className='wheel-side'>
        <div className='wheel' ref={wheel}>
          {}
        </div>
        <div className='arrow'/>
      </div>
      <button onClick={spin} ref={button}>SPIN</button>
    </div>
  );
}

export default App;
