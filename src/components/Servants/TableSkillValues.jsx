import NpChargeIcon from '../../assets/NpCharge.png'
import HealEffectIcon from '../../assets/HealEffect.png'

export default function TableSkillValues( { functions } ) {

    const percentageBuffValues = [
        'upCommandall', 
        'upCommandatk', 
        'upAtk',
        'upDefence',
        'downDefence',
        'downAtk',
        'upDamageIndividuality',
        'upStarweight', 
        'upCriticaldamage',
        'upCriticalpoint', 
        'downDefenceCriticaldamage',
        'upNpdamage', 
        'upDropnp',
        'upDamage',
        'upGrantstate', 
        'downDefencecommandall', 
        'upResistInstantdeath',
        'downGainHp',
        'upToleranceSubstate'
    ]

    const functionState = [
        'addStateShort',
        'addState',
    ]

    const flatBuffValues = [
        'guts'
    ]

    const filteredBuffs = functions.map(element => {
        if (functionState.includes(element.funcType) && percentageBuffValues.includes(element.buffs[0].type)) {
            
            return {
                name : element?.buffs[0].name,
                icon : element?.buffs[0].icon,
                value : element?.svals.map((sval => ` ${Math.floor(sval?.Value) / 10}% `))
            };
            
        } else if (element.funcType === "gainNp") {
            const getNPvalue = element?.svals.map((sval => ` ${sval?.Value * 0.01}% `))
            return {
                name: "NP",
                icon: NpChargeIcon,
                value : getNPvalue
            };
        } else if (functionState.includes(element.funcType) && flatBuffValues.includes(element.buffs[0].type)) {
            
            return {
                name : element?.buffs[0].name,
                icon : element?.buffs[0].icon,
                value : element?.svals.map((sval => sval.Value))
            };
            
        } else if (element.funcType === "gainHp") {
            
            return {
                name : "Heal",
                icon : HealEffectIcon,
                value : element?.svals.map((sval => sval.Value))
            };
            
        } 
        else {
            return [];
        }
    })

    return (
        <>
            {filteredBuffs.map(({name, icon, value} = {icon : ''}) => (
                <>
                    {icon && name && <div className="skill-img-name">
                        <img src={icon}/>
                        <span>{name}</span>
                    </div>}
                    {value && <div className="skill-values">
                        {value.map((num, index) => (
                        <span className='skill-value-numbers' key={index}>{num}</span>
                        ))}
                    </div>}
                </>
            ))}
        </>
    )
}