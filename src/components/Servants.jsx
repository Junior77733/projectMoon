import Filter from "./Filters"
import ServantDetails from "./ServantDetails"
import { useState, useRef } from 'react'

export default function Servants() {

    const [number, setNumber] = useState(0)

    const fieldRef = useRef(null)

    const enterServant = () => {
        if (fieldRef.current) {
            setNumber(fieldRef.current.value)
        }
    }

    return (
        <>
            <main>
                <Filter />
                <div><h1>SERVANTS</h1></div>
                <input type="text" ref={fieldRef} />
                <button onClick={enterServant}>SEARCH</button>
                <ServantDetails servantId={number}/>
            </main>
        </>
    )
}