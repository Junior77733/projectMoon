import { useState } from 'react'

export default function ServantImage( {extraAssets} ) {

    const [ nextImage, setNextImage ] = useState(0)

    const ascensionArt = extraAssets?.charaGraph?.ascension;
    const costumeArt = extraAssets?.charaGraph?.costume;
    const totalArt = { ...ascensionArt, ...costumeArt }


    const servantImage = Object.values(totalArt);

    const handleNextImage = () => {
        setNextImage(prev => prev + 1);
    }

    const handlePrevImage = () => {
        setNextImage(next => next - 1);
    }

    return (
        <>
            {nextImage > 0 && <button className="prev-btn" onClick={handlePrevImage}>PREV</button>}
            <img src={servantImage[nextImage]} />
            {nextImage < servantImage.length - 1 && <button className="next-btn" onClick={handleNextImage}>NEXT</button>}
        </>
    )

}