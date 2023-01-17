import React, {useState} from 'react'
import Effect from './Effect'

const State = () => {

   const [state, setState] = useState({
      value1: true,
      value2: 10,
      value3: 'Some string'
   })
   const [counter, setCounter] = useState(() => {
      const initialState = function () {
         return 0
      }()
      return initialState
   })

   return (
      <>
      <h2>Basic React hooks</h2>
      <button onClick={() => setState({ ...state, value1: !state.value1 })}>Toggle text</button>
      <button onClick={() => setCounter(counter + 1)}>Increment counter +</button>
      <button onClick={() => setCounter(counter - 1)}>Increment counter -</button>
      <p>{state.value1}</p>
      {
         state.value1 ? (
            <div>
               <p>{counter}</p>
               <p>{state.value2}</p>
               <p>{state.value3}</p>
               <Effect/>
            </div>
         ) : ''
      }

   </>
   )
}

export default State