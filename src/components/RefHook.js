import React, {useRef, useEffect} from 'react'

function RefHook() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default RefHook
