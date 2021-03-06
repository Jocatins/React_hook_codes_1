import React,{useReducer} from 'react'

const initState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increase':
            return state + 1
        case 'decrease':
            return state - 1
        case 'reset':
            return initState
        default:
            return state
    }
}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <div> Count - {count}</div>
            <button onClick={()=> dispatch('increase')}>Increase</button>
            <button onClick={()=> dispatch('decrease')}>Decrease</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer
