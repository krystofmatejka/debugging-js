import React, {useState} from 'react'

export default () => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>++</button>
    </>
  )
}
