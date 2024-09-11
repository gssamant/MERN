import { useState } from "react";

function Counter() {

  let [counter, setCounter] = useState(10);
  const addvalue = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  const reducevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addvalue} >Increment</button>
      <button onClick={reducevalue}>Decrement</button>
    </div>
  )
}

export default Counter
