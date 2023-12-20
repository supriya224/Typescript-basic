import React, { useReducer } from 'react'


type CounterState = {
    count: number
}
//    oe ye bhi ho skta hai 
// type CounterAction = {  
//     type: string
//     payload: number   
// }
 
// ye dono to typesctript ko acha krne k liye kra gya hi
type UpdateAction = {
    type: 'increment' |'decrement'
    payload: number
}
type ResetAction = {
    type: 'reset'
   
}

type CounterAction = UpdateAction | ResetAction


const initialState = { count: 0 }
function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1 className=' w-28 m-9 h-15 p-4 bg-blue-400 text-white font-extrabold shadow-md shadow-black'> Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })} className='bg-pink-400 m-9 text-white font-bold p-4'>Increment </button>
            <button onClick={() => dispatch({ type: 'reset'})} className='bg-blue-400 m-9 text-white font-bold p-4'> reset </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })} className='bg-orange-400 m-9 text-white font-bold p-4'> Decrement </button>

        </>
    )
}
