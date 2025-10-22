export default function TableSkillValues( { functions } ) {

    //first, let's define things that we need to be checking for, so we can safely apply multiplication and percentage symbols to them

    const percentageBuffValues = [
        'upCommandall', 
        'upCommandatk', 
        'upAtk', 
        'upDefence',
        'downDefence', 
        'upDamageIndividuality',
        'upStarweight', 
        'upCriticalrate',
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
    //checks for addState,short && checks for percentageBuffs -> if both are true -> proceed
        if (functionState.includes(element.funcType) && percentageBuffValues.includes(element.buffs[0].type)) { //there's only going to be 1 buffs array inside each element, so it's fine to be specific.
            

            const buffName = element?.buffs[0].name;
            const buffIcon = element?.buffs[0].icon;

            // console.log(buffName)

            //immediately proceeds to get the svals array
            const getValue = element?.svals.map((sval => `${sval.Value * 0.1}%`));

            return {
                name : buffName,
                icon : buffIcon,
                value : getValue
            };
            
        } else if (element.funcType === "gainNP") {
            const getNPvalue = element?.svals.map((sval => `${sval?.Value * 0.1}%`))
            return {
                value : getNPvalue
            };
        }
        else {
            return [];
        }
    })


    return (
        <div>
            {filteredBuffs.map(({name, icon, value}) => (
                <>
                    <h3>{name}</h3>
                    <img src={icon} style={{width:'20px', height: '20px'}}/>
                    <span>
                        {value}
                    </span>
                </>
            ))}
        </div>
    )
}