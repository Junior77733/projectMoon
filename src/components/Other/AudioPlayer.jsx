import { useState, useRef, useEffect } from 'react'

export default function AudioPlayer( {id} ) {

    const [ bgm, setBgm ] = useState('')
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    // const [ isPlaying, setIsPlaying] = useState(false)
    const bgmRef = useRef(null)

    useEffect(() => {

        const fetchBGM = async () => {

            try {

                const response = await fetch(`https://api.atlasacademy.io/nice/JP/bgm/${id}?lang=en`)

                if (!response) {
                    throw new Error(`Request Failed ${response.error}`)
                }

                const data = await response.json()
                setBgm(data)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
            }
        fetchBGM();}
        ,[id]
)

if (loading) {
    return <p>Loading...</p>
}

if (error) {
    return <p>Error!</p>
}

// const handleClick = () => {
//     if (bgmRef.current.pause) {
//        if (isPlaying) {
//         bgmRef.current.pause();
//        }

//        else {
//         bgmRef.current.play();
//        }

//        setIsPlaying(!isPlaying)
//     }
// }

const { name, audioAsset } = bgm

    return (
        <div className='audio-player'>
            <p>Name : [{id}] {name}</p>
            <audio src={audioAsset} ref={bgmRef} loop autoPlay controls/>
            {/* <button onClick={handleClick}> {isPlaying ? '❚❚' : '▶︎'} </button> */}
        </div>
    )
}