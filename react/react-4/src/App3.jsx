import React, { useState } from 'react';

function App3() {

  var b = `${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`

  const [count, setCount] = useState(b);

  function update() {
    setCount( `${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}` )
  }

  setInterval(update, 1000);  // we are also define this function above the function declarations

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App3;