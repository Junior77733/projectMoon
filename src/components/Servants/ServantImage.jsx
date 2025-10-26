import { useState } from 'react'
import ArrowLeft from '../../assets/arrow-left.png'
import ArrowRight from '../../assets/arrow-right.png'

export default function ServantImage( {extraAssets} ) {

    const [ currentImage, setCurrentImage ] = useState(0)

    const ascensionArt = extraAssets?.charaGraph?.ascension;
    const costumeArt = extraAssets?.charaGraph?.costume;
    const totalArt = { ...ascensionArt, ...costumeArt }

    const servantImage = Object.values(totalArt);

    const handleNextImage = () => {
        setCurrentImage(prev => prev + 1);
    }

    const handlePrevImage = () => {
        setCurrentImage(next => next - 1);
    }

    return (
        <div className='img-container'>
            {currentImage > 0 && <button className="prev-btn" onClick={handlePrevImage}> <img src={ArrowLeft} alt="" /> </button>}
            {currentImage < servantImage.length - 1 && <button className="next-btn" onClick={handleNextImage}> <img src={ArrowRight} alt="" />  </button>}
            <img src={servantImage[currentImage]} />

        </div>
    )

}