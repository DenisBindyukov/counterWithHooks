import React, {useState} from 'react';
import './App.css';
import Counter from "./Component/Counter/Counter";

function App() {
  let [counter, setCounter] = useState<number>(0);
  const enlargeCounter = () => {
    if (counter === 5) return;
    setCounter(counter + 1);
  };
  const resetCounter = () => { setCounter(0);}

  return (
    <div className="App">
     <Counter number={counter}
              enlargeCounter={enlargeCounter}
              resetCounter={resetCounter} />
    </div>
  );
}

export default App;
