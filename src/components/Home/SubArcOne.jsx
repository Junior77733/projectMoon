import { useState, useEffect } from 'react'

export default function SubArcOne() {

    const [ chapter, setChapter ] = useState([]);
    const [ error, setError ] = useState(null);

    async function subArcOne(warID) {

        const fetchingSubArcOne = warID.map( ID => {

            return fetch(`https://api.atlasacademy.io/nice/NA/war/${ID}?lang=en&lore=true`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Request Failed!")
                    }
                    return response.json();
                })
        } )

        const result = await Promise.all(fetchingSubArcOne);
        return result;

    }


    useEffect(() => {

        const wars = [201, 202, 203, 204]

        const initiateFetchCall = async () => {

            try {
                const result = await subArcOne(wars);
                setChapter(result)
            }
            catch (err) {
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
            <h2 className='trait-title'>Arc 1.5</h2>
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