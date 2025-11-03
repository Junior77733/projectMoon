export default function AssetStoryImages( {image} ) {

    return (
        <>
            <div>
                {Object.values(image).flatMap(element => Object.values(element)).map(element => (
                    <img className="story-images" src={element} alt={element} />
                ))}
            </div>
        </>
    )
}