export default function AssetFacesAndCommands( {faces, commands} ) {

    return (
        <>
            <div>
                {Object.values(faces).flatMap(element => Object.values(element)).map(element => (
                    <img src={element} alt={element} />
                ))}
            </div>
            <div>
                {Object.values(commands).flatMap(element => Object.values(element)).map(element => (
                    <img src={element} alt={element} />
                ))}
            </div>
        </>
    )
}