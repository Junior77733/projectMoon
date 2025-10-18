import { useState, useRef, useEffect } from 'react'

export default function BGM( {id} ) {

    const [ bgm, setBgm ] = useState('')
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ isPlaying, setIsPlaying] = useState(false)
    const bgmRef = useRef(null)

    useEffect(() => {

        const fetchBGM = async () => {

            try {

                const response = await fetch(`https://api.atlasacademy.io/nice/JP/bgm/${id}`)

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

const handleClick = () => {
    if (bgmRef.current.pause) {
       if (isPlaying) {
        bgmRef.current.pause();
       }

       else {
        bgmRef.current.play();
       }

       setIsPlaying(!isPlaying)
    }
}

const { name, audioAsset } = bgm

    return (
        <div>
            <p>{name}</p>
            <audio src={audioAsset} ref={bgmRef} loop />
            <button onClick={handleClick}> {isPlaying ? 'pause' : 'play'} </button>
        </div>
    )
}