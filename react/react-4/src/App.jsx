import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function IncNumber(){

    setCount(count + 1)

}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNumber}>+</button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default App;
