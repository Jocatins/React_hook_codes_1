import React, {useState, useMemo} from 'react'


function MemoHook() {
    const [counter, setCounter] = useState(0)
    const [counterOne, setCounterOne] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }
    const increaseOne = () => {
        setCounterOne(counterOne + 2)
    }
    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000 ) i ++
        return counter % 2 == 0
    }, [counter])
    

    return (
        <div>
        <div>
            <button onClick={increase}>Count - {counter}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
            <button onClick={increaseOne}>Count two - {counterOne}</button>
        </div>
        </div>
    )
}

export default MemoHook
