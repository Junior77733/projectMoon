import NpChargeIcon from '../../assets/NpCharge.png'

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
        'regainNP', 
        'upDamage',
        'upGrantstate', 
        'downDefencecommandall', 
        'upResistInstantdeath',
        'downGainHp'
    ]

    const functionState = [
        'addStateShort',
        'addState',
    ]

    const filteredBuffs = functions.map(element => {
        if (functionState.includes(element.funcType) && percentageBuffValues.includes(element.buffs[0].type)) {
            
            const buffName = element?.buffs[0].name;
            const buffIcon = element?.buffs[0].icon;

            // const getValue = 

            return {
                name : buffName,
                icon : buffIcon,
                value : element?.svals.map((sval => ` ${sval.Value * 0.1}% `))
            };
            
        } else if (element.funcType === "gainNp") {
            const getNPvalue = element?.svals.map((sval => ` ${sval?.Value * 0.01}% `))
            return {
                name: "NP",
                icon: NpChargeIcon,
                value : getNPvalue
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
                    <div className="skill-img-name">
                        {icon && <img src={icon}/>}
                        <span>{name}</span>
                    </div>
                    <div className="skill-values">
                        {value && value.map((num, index) => (
                        <span className='skill-value-numbers' key={index}>{num}</span>
                        ))}
                    </div>
                </>
            ))}
        </>
    )
}