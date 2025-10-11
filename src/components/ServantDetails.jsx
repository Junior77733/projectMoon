import { useState, useEffect } from 'react'

export default function ServantDetails({servantId}) {

    const [servant, setServant] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    useEffect(() => {

        const fetchServantDetails = async () => {
            const response = await fetch(`https://api.atlasacademy.io/nice/JP/servant/${servantId}`)
            const data = await response.json();
            setServant(data)

        }
    fetchServantDetails();},
    [servantId]
    )

    const ascensionArt = servant.extraAssets?.charaGraph?.ascension;

    return (
    <div>
      <h1>{servant.name}</h1>

      {/* Check if ascensionArt exists and has keys */}
      {ascensionArt && Object.keys(ascensionArt).length > 0 ? (
        <div>
          <h2>Ascension Art</h2>
          {/* Map over the [key, value] pairs of the ascension object */}
          {Object.entries(ascensionArt).map(([level, url]) => (
            <div key={level} style={{ marginBottom: '10px', backgroundColor: 'red' }}>
              <p>Ascension {parseInt(level)}</p>
              <img src={url} alt={`Ascension ${level}`} style={{ maxWidth: '300px' }} />
            </div>
          ))}
        </div>
      ) : (
        <p>No ascension art available.</p>
      )}
    </div>
  );
}