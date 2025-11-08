import { useState, useEffect } from 'react'

export default function MainArcTwo() {

    const [chapter, setChapter] = useState([]);
    const [error, setError] = useState(null)

    async function allWars(warID) {

    const fetchingArcTwo = (warID).map( ID => {
        
        return fetch (`https://api.atlasacademy.io/nice/NA/war/${ID}?lang=en&lore=true`)
            .then(response => {
                if(!response.ok) {
                    throw new Error ("Request Failed")
                }
                return response.json();
            })

    })
            const result = await Promise.all(fetchingArcTwo);
            return result;
}

    useEffect(() => {

        const wars = [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311]

        const initiateFetchCall = async () => {

            try {
                const result = await allWars(wars)
                setChapter(result)
            }
            catch (err) {
                setError(err)
            }

        }

        initiateFetchCall()

    },[])

    if (error) {
        return <p>An error seemed to have occured : {error.message}</p>
    }

    

    return (

        <div className='story-chapters'>
            <h2 className='trait-title'>Arc 2</h2>
            {chapter.map( element => (
                <div key={element.id}>
                    <a href={element.longName}>
                        <img className='story-chapter-banner' src={element.banner} alt={element.name} loading='lazy'/>
                    </a>
                </div>
            ))}
        </div>

    )

}