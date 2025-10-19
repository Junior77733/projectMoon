import AudioPlayer from "./AudioPlayer"
import { useState, useRef } from 'react'

export default function BGM() {

    const [ ref, setRef ] = useState(null)
    const inputRef = useRef(null)


    const handleClick = () => {
        setRef(inputRef.current.value)
    }

    return (
        <>
        <div className="search-bgm">
            <input ref={inputRef} />
            <button onClick={handleClick}>GET BGM</button>
        </div>
        <AudioPlayer id={ref} />
        </>
    )
    
}