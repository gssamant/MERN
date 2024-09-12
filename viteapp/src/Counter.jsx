import './index.css'
import { useState } from "react";

function Counter() {

  let [counter, setCounter] = useState(10);
  const addvalue = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  const reducevalue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
    }
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>Counter value: {counter}</h1>
      <button className='bg-black text-white bm-4 left-4px ' onClick={addvalue} >Increment</button><br></br>
      <button onClick={reducevalue}>Decrement</button>
    </div>
  )
}

export default Counter
