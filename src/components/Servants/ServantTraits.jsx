export default function ServantTraits( {traits} ) {

    return (
        <div className="trait-container">
           {traits.map(element => (
            <div className="traits">
              <a href={element.name}>{element.name}</a>  
            </div>
           ))}
        </div>
    )
}