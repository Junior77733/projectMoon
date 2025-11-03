export default function AssetGraphAndStatus( {charaGraph, status} ) {

    return (
        <>
            <div>
                {Object.values(charaGraph).flatMap(element => Object.values(element)).map(element => (
                <img src={element} alt={element} />))}
            </div>
            <div>
                {Object.values(status).flatMap(element => Object.values(element)).map(element => (
                <img src={element} alt={element} />))}
            </div>
        </>
    )
}