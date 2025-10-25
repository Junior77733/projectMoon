import { useState, useEffect } from 'react'
import ServantImage from './ServantImage'
import TableProfile from './TableProfile'
import TableSkills from './TableSkills'

export default function ServantDetails({servantId}) {

    const [servant, setServant] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchServantDetails = async () => {

          try {
            const response = await fetch(`https://api.atlasacademy.io/nice/JP/servant/${servantId}?lang=en&lore=true`)

            if (!response.ok) {
              throw new Error("Request Failed!")
            }

            const data = await response.json();
            setServant(data)

          } catch (e) {
              setError(e.message)
          } finally {
              setLoading(false)
          }

        }
    fetchServantDetails();},
    [servantId]
    )

    if (loading) {
      return <p className="loading-screen">Loading...</p>
    }

    if (error) {
      return <p>Error!</p>
    }

    const { collectionNo, name, gender, className, cost, atkBase, hpBase, atkMax, hpMax, attribute, starAbsorb, cards, limits, extraAssets, noblePhantasms, skills } = servant;

    const servantRarity = `${"★".repeat(servant.rarity)}`;
    const servantStarGen = `${(servant.starGen * 0.1).toFixed(1)}%`;
    const servantDeathChance = `${(servant.instantDeathChance * 0.1).toFixed(1)}%`;
    const servantAlignment = `${limits?.[1]?.policy} ${limits?.[1]?.personality}`;
    const servantNpGain = `${(noblePhantasms?.[0]?.npGain?.np[0]) / 100}%`;

    return (
      <div>
          <h1 className="servant-h1">{name}</h1>

          <div className="servant-container">

              <ServantImage extraAssets={extraAssets} />

              <TableProfile 
                gender={gender}
                name={name}
                servantClass={className}
                rarity={servantRarity}
                cost={cost}
                attribute={attribute}
                alignment={servantAlignment}
                hpBase={hpBase}
                atkBase={atkBase}
                hpMax={hpMax}
                atkMax={atkMax}
                npGain={servantNpGain}
                starAbsorb={starAbsorb}
                starGen={servantStarGen}
                instantDeath={servantDeathChance}
                cardDeck={cards}
              />

          </div>

          <div><TableSkills skills={skills} collectorId={collectionNo} /></div>
      </div>
  );
}