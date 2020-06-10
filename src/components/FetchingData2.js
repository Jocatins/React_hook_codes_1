import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'oops something went wrong'
            }
        default: 
        return state
    }
}

function FetchingData2() {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/12')
            .then(response => {
                dispatch({type: 'FETCH_DATA', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    },[])

    return (
        <div>
        {state.loading ? 'loading....' : state.post.title}
        {state.error ? state.error : null}
        </div>
    )
}

export default FetchingData2
