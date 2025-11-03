export default function AssetFigure( {narrowFigure, charaFigure} ) {

    return (
        <>
            <div>
                {Object.values(narrowFigure).flatMap(element => Object.values(element)).map(element => (
                <img src={element} alt="" />
                ))}
            </div>
            <div>
                {Object.values(charaFigure).flatMap(element => Object.values(element)).map(element => (
                <img className="story-images" src={element} alt="" />
                ))}
            </div>
        </>
    )
}