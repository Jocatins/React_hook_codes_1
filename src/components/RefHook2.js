import React, {useState, useEffect, useRef} from 'react'

function RefHook2() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(()=> {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}> Clear timer</button>
        </div>
    )
}

export default RefHook2
