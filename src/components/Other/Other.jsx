import { useState } from 'react'
import BGM from "./BGM"

export default function Other() {

    const [ onBGM, setOnBGM ] = useState(false)
    const [ onEvents, setOnEvents ] = useState(false)
    const [ onLore, setOnLore ] = useState(false)
    const [ onTiers, setOnTiers ] = useState(false)

    const handleActivateBGM = () => {
        setOnBGM(!onBGM)
    }

    const handleActivateEvents = () => {
        setOnEvents(!onEvents)
    }

    const handleActivateLore = () => {
        setOnLore(!onLore)
    }

    const handleActivateTiers = () => {
        setOnTiers(!onTiers)
    }

    return (
        <>
         <div className='other'>
            <button className="other-options" onClick={handleActivateBGM}>BGM</button>
            <button className="other-options" onClick={handleActivateEvents}>EVENTS</button>
            <button className="other-options" onClick={handleActivateLore}>LORE</button>
            <button className="other-options" onClick={handleActivateTiers}>TIER LISTS</button>
        </div>
        <div>{onBGM && <BGM />}</div>
        </>
        
    )
}