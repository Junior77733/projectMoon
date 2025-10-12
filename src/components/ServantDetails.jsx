import { useState, useEffect } from 'react'
import Table from './Table'

export default function ServantDetails({servantId}) {

    const [servant, setServant] = useState({})
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    useEffect(() => {

        const fetchServantDetails = async () => {
            const response = await fetch(`https://api.atlasacademy.io/nice/JP/servant/${servantId}?lang=en&lore=true`)
            const data = await response.json();
            setServant(data)

        }
    fetchServantDetails();},
    [servantId]
    )

    const ascensionArt = servant.extraAssets?.charaGraph?.ascension;
    // const servantGender = servant.gender;

    const { name, gender, className, rarity, atkBase, hpBase, hpMax, atkMax, attribute, starAbsorb, starGen } = servant;

    return (
    <div>
      <h1 className="servant-h1">{servant.name}</h1>

      {ascensionArt && Object.keys(ascensionArt).length > 0 ? (
        <div className="grand-container">
          {Object.entries(ascensionArt).map(([level, url]) => (
            <div className="servant-container" key={level}>
              <p>Ascension {parseInt(level)}</p>
              <img className="servant-img" src={url} alt={`Ascension ${level}`} />
            </div>
          ))}
        </div>
      ) : (
        <p>No ascension art available.</p>
      )}
      <>
        <Table 
          gender={gender}
          name={name}
          servantClass={className}
          rarity={rarity}
          attribute={attribute}
          hpBase={hpBase}
          atkBase={atkBase}
          hpMax={hpMax}
          atkMax={atkMax}
          starAbsorb={starAbsorb}
          starGen={starGen}
        />
      </>
    </div>
  );
}