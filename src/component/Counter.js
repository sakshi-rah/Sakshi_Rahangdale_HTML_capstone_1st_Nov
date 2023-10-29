import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const refresh = () => {
    setCount(0);
  }
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (!count == 0) {
      setCount(count - 1);
    } else {
      setError("can't go below 0")
    }
  }

  return (
    <div className='m-auto mt-5 p-4 bg-secondary text-light w-50 rounded'>

      <h1>Counter App Using React</h1><br />
      <h4>Current Count is : {count}</h4>
      <div className='text-danger fs-4 mt-3'>
        <p>Error : {error}</p>
      </div>
      <button onClick={decrement} className='btn btn-success m-5'>Decrement</button>
      <button onClick={refresh} className='btn btn-danger m-5'>Refresh</button>
      <button onClick={increment} className='btn btn-primary m-5'>Increment</button>

    </div>
  )
}

export default Counter;