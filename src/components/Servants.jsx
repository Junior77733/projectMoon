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
                <div className="search-function">
                    <input type="text" ref={fieldRef} placeholder="Enter the name here..." />
                    <button className="search-servant-btn" onClick={enterServant}>SEARCH</button>
                </div>
                    <ServantDetails servantId={number}/>
            </main>
        </>
    )
}