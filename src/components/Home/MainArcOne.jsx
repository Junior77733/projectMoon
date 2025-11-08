import { useState, useEffect } from 'react'

export default function MainArcOne() {

    const [ chapter, setChapter ] = useState([])
    const [ error, setError ] = useState(null)

    async function arcOne(warID) {

        const fetchingArcOne = warID.map( ID => {

            return fetch(`https://api.atlasacademy.io/nice/NA/war/${ID}?lang=en&lore=true`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Request Failed!")
                    }
                    return response.json()
                })
        })

        const result = await Promise.all(fetchingArcOne);
        return result;

    }

    useEffect(() => {

        const wars = [100, 101, 102, 103, 104, 105, 106, 107, 108];

        const initiateFetchCall = async () => {

            try {
                const result = await arcOne(wars)
                setChapter(result);
            }
            catch (err) {
                setError(err)
            }

        }

        initiateFetchCall();

    }, [])

    if (error) {
        return <p>an error seemed to have occured : {error.mesage}</p>
    }


    return (
        <div className='story-chapters'>
            <h2 className='trait-title'>Arc 1</h2>
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