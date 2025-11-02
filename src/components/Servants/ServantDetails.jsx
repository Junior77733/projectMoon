import { useState, useEffect } from 'react'
import ServantImage from './ServantImage'
import TableProfile from './TableProfile'
import TableSkills from './TableSkills'
import TableNP from './TableNP'
import TablePassives from './TablePassives'
import TableAppends from './TableAppends'
import ServantTraits from './ServantTraits'
import TableSkillMaterials from './TableSkillMaterials'
import TableAscensionMaterials from './TableAscensionMaterials'
import TableAppendMaterials from './TableAppendMaterials'
import TableCostumeMaterials from './TableCostumeMaterials'

export default function ServantDetails({servantId}) {

    const [servant, setServant] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activeSkill, setActiveSkill] = useState(false)
    const [passiveSkill, setPassiveSkill] = useState(false)
    const [appendSkill, setAppendSkill] = useState(false)
    const [np, setNp] = useState(false)

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

    const handleActiveSkills = () => {
      setActiveSkill(!activeSkill)
    }

    const handlePassiveSkills = () => {
      setPassiveSkill(!passiveSkill)
    }

    const handleAppendSkills = () => {
      setAppendSkill(!appendSkill)
    }

    const handleNoblePhantasm = () => {
      setNp(!np)
    }

    const { collectionNo, name, gender, className, cost, atkBase, hpBase, atkMax, hpMax, attribute, starAbsorb, cards, limits, extraAssets, classPassive, appendPassive, noblePhantasms, skills, traits, skillMaterials, ascensionMaterials, appendSkillMaterials, costumeMaterials } = servant;

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

          <button className="table-render-btn" onClick={handleActiveSkills}>Active Skills</button>
          <button className="table-render-btn" onClick={handlePassiveSkills}>Passive Skills</button>
          <button className="table-render-btn" onClick={handleAppendSkills}>Append Skills</button>
          <button className="table-render-btn" onClick={handleNoblePhantasm}>Noble Phantasm</button>

          {activeSkill && <div><TableSkills skills={skills} collectorId={collectionNo} /></div>}
          {passiveSkill && <div><TablePassives classPassive={classPassive} /></div> }
          {appendSkill && <div><TableAppends appendPassive={appendPassive} /></div>}
          {np && <div><TableNP noblePhantasms={noblePhantasms} collectorId={collectionNo} /></div> }

          <h1 className="trait-title">Traits</h1>
          <ServantTraits traits={traits} />

          <h1 className="trait-title">Materials</h1>
          <div className="material-table">
            <TableAscensionMaterials ascensionMaterials={ascensionMaterials} />
            <TableSkillMaterials skillMaterials={skillMaterials} />
            <TableAppendMaterials appendSkillMaterials={appendSkillMaterials} />
            <TableCostumeMaterials costumeMaterials={costumeMaterials} />
          </div>

          

      </div>
  );
}