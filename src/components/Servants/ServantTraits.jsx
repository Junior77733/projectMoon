export default function ServantTraits( {traits} ) {

    return (
        <div>
          <h1 className="trait-title">Traits</h1>
           {traits.map(element => (
            <div className="traits">
              <a href={element.name}>{element.name}</a>  
            </div>
           ))}
        </div>
    )
}