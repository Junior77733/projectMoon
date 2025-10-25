import { useState } from 'react'

export default function ServantImage( {extraAssets} ) {

    const [ currentImage, setcurrentImage ] = useState(0)

    const ascensionArt = extraAssets?.charaGraph?.ascension;
    const costumeArt = extraAssets?.charaGraph?.costume;
    const totalArt = { ...ascensionArt, ...costumeArt }

    const servantImage = Object.values(totalArt);

    const handleNextImage = () => {
        setcurrentImage(prev => prev + 1);
    }

    const handlePrevImage = () => {
        setcurrentImage(next => next - 1);
    }

    return (
        <>
            {currentImage > 0 && <button className="prev-btn" onClick={handlePrevImage}>PREV</button>}
            <img src={servantImage[currentImage]} />
            {currentImage < servantImage.length - 1 && <button className="next-btn" onClick={handleNextImage}>NEXT</button>}
        </>
    )

}