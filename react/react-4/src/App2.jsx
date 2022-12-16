import React, { useState } from 'react';

function App2() {

    var b = `${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`

  const [count, setCount] = useState(b);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount( `${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}` )}>
      click here for get time
      </button>
    </div>
  );
}

export default App2;