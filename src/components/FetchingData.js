import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchingData() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setPost(response.data)
                setLoading(false)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Oops 404 encountered')
            })
    }, [])

    return (
        <div>
            {loading ? 'loading....' : post.title}
            {error ? error : null}
        </div>
    )
}

export default FetchingData
