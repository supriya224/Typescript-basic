import React, { useState } from "react"

type CounterState = {
  count: number;
}

const Counter: React.FC = () => {
  const [state, setState] = useState<CounterState>({ count: 0 })

  const addValue = () => {
    setState({ count: state.count + 1 })
 
  }
  const removeValue = () => {
    setState({ count: state.count - 1 })
  
  }
  const reset = () => {
    setState({ count: 0 })
  }
 

  return (
    <div className="container w-[50vw] h-[75vh] py-9 mx-[25rem] bg-indigo-500 text-white rounded-md shadow-xl shadow-indigo-700 text-center items-center justify-center">
    <h1 className="text-2xl font-bold ">Assignment of Analystt.ai</h1>
    <div className="mt-20 justify-between gap-9">
      <h1 className="w-28 h-16 mx-72 p-3 text-center justify-center text-2xl rounded-md bg-indigo-800">{state.count}</h1>
      <div className="justify-between w-full h-12 my-20 flex container text-lg ">
        <label htmlFor="" className="mx-20">Add
          <button onClick={addValue} className=" w-20 h-10 rounded-lg shadow-md shadow-white bg-black hover:bg-gray-800 hover:scale-110 duration-200 ease-in"  >+</button>
        </label>
        <label htmlFor="" className="mx-20">Reset
          <button onClick={reset} className=" w-24 h-10 rounded-lg shadow-md shadow-white bg-black hover:bg-gray-800 hover:scale-110 duration-200 ease-in" >Reset</button>
        </label>
        <label htmlFor="" className="mx-20">Remove
          <button onClick={removeValue} className=" w-20 h-10 rounded-lg shadow-md shadow-white  bg-black hover:bg-gray-800 hover:scale-110 duration-200 ease-in" >-</button>
        </label>

      </div>
    </div>
  </div>

   
  )
}

export default Counter;
