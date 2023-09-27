import React from 'react';
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Add</button>
    </div>
  );
}

export default Counter;
