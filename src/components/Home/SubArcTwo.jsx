import { useState, useEffect } from 'react'

export default function SubArcTwo() {

    const [ chapter, setChapter ] = useState([])
    const [ error, setError ] = useState(null)

    async function subArcTwo(warID) {

        const fetchingSubArcTwo = warID.map( ID => {

            return fetch(`https://api.atlasacademy.io/nice/JP/war/${ID}?lang=en&lore=true`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Request Failed!")
                    }
                    return response.json();
                })

        })

            const result = await Promise.all(fetchingSubArcTwo);
            return result;

    }

    useEffect(() => {

        const wars = [40201, 40301, 40401, 40501]

        const initiateFetchCall = async () => {

            try {
                const result = await subArcTwo(wars);
                setChapter(result);
            }
            catch(err) {
                setError(err)
            }

        }

        initiateFetchCall()

    },[])

    if (error) {
        return <p>an error seemed to have occured : {error.message} try refreshing the page</p>
    }

    return (
        <div className='story-chapters'>
            <h2 className='trait-title'>Arc 2.5</h2>
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