import React, { useState } from 'react';
function Count1() {
   const [counter, setCounter] = useState(0);
   return (
      <div className='counte'>
         <button onClick={() => setCounter(counter + 1)}>Increment</button>
         <button onClick={() => setCounter(counter - 1)}>Decrement</button>
         <button onClick={()=> setCounter(0)}>Reset</button>
         <p>Count: {counter}</p>
      </div>
   );
}
export default Count1;
