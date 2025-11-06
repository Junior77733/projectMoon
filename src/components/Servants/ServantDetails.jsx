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
import TableBondLevel from './TableBondLevel'
import TableServantStats from './TableServantStats'
import ServantAssets from './ServantAssets'
import ServantCoins from './ServantCoins'
import TableServantComments from './TableServantComments'
import ServantVoiceFiles from './ServantVoiceFiles'

export default function ServantDetails({servantId}) {

    const [servant, setServant] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activeSkill, setActiveSkill] = useState(false)
    const [passiveSkill, setPassiveSkill] = useState(false)
    const [appendSkill, setAppendSkill] = useState(false)
    const [np, setNp] = useState(false)
    const [assetRender, setAssetRender] = useState(false)
    const [commentRender, setCommentRender] = useState(false)
    const [voiceRender, setVoiceRender] = useState(false)

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

    const handleAssetRendering = () => {
      setAssetRender(!assetRender)
    }

    const handleCommentRendering = () => {
      setCommentRender(!commentRender)
    }

    const handleVoicesRendering = () => {
      setVoiceRender(!voiceRender)
    }

    const { collectionNo, name, gender, className, cost, atkBase, hpBase, atkMax, hpMax, attribute, starAbsorb, cards, limits, extraAssets, classPassive, appendPassive, noblePhantasms, skills, traits, skillMaterials, ascensionMaterials, appendSkillMaterials, costumeMaterials, bondGrowth, profile, coin, bondEquip } = servant;

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
                voice={profile}
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

          <TableServantStats profile={profile} />
          <TableBondLevel bondGrowth={bondGrowth} bondId={bondEquip} />

          <h1 className="trait-title">Materials</h1>
          <div className="material-table">
            <TableAscensionMaterials ascensionMaterials={ascensionMaterials} />
            <TableSkillMaterials skillMaterials={skillMaterials} />
            <TableAppendMaterials appendSkillMaterials={appendSkillMaterials} />
            <TableCostumeMaterials costumeMaterials={costumeMaterials} />
          </div>

          <ServantCoins coins={coin} />
          <ServantTraits traits={traits} />

          <button className="table-render-btn" onClick={handleCommentRendering}>Servant Comments</button>
          {commentRender && <TableServantComments profile={profile} />}

          <button className="table-render-btn" onClick={handleAssetRendering}>Assets</button>
          {assetRender && <ServantAssets extraAssets={extraAssets} />}

          <button className="table-render-btn" onClick={handleVoicesRendering}>Voices</button>
          {voiceRender && <ServantVoiceFiles profile={profile} />}

      </div>
  );
}