import React,{useReducer} from 'react'

const initState = {
    firstCounter: 0,
    secondCounter: 20
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrease':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increase2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrease2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initState
        default:
            return state
    }
}

function UseReducer2() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <div> Count - {count.firstCounter}</div>
            <div>Second Counter {count.secondCounter}</div>
            <button onClick={()=> dispatch({type: 'increase', value: 1})}>Increase</button>
            <button onClick={()=> dispatch({type: 'decrease', value: 1})}>Decrease</button>
            <button onClick={()=> dispatch({type: 'increase', value: 5})}>Increase by 5</button>
            <button onClick={()=> dispatch({type: 'decrease', value: 5})}>Decrease by 5</button>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
            <div>
            <button onClick={()=> dispatch({type: 'increase2', value: 1})}>Increase by 2</button>
            <button onClick={()=> dispatch({type: 'decrease2', value: 1})}>Decrease by 2</button>
            </div>
        </div>
    )
}

export default UseReducer2
