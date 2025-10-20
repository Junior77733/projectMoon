import React from 'react';

export default function TableSkillValues({ functions }) {

    const includedBuffTypes = [
        'upCommandall', 'upCommandatk', 'upAtk', 'upDefence',
        'downDefence', 'upDamageIndividuality',
        'upStarweight', 'upCriticalrate', 'upCriticaldamage',
        'upCriticalpoint', 'downDefenceCriticaldamage' ,'upNpdamage', 'upDropnp',
        'regainNP', 'upDamage','upGrantstate', 'downDefencecommandall', 'upResistInstantdeath'
    ];


    const excludedBuffTypes = [
        'donotAct'
    ];

    const filteredBuffs = functions.flatMap(element => {
        if (!element?.buffs || !element?.svals) {
            return [];
        }

        return element.buffs.map((buff) => {
            // Check if the buff type is in the included list AND NOT in the excluded list
            if (includedBuffTypes.includes(buff.type) && !excludedBuffTypes.includes(buff.type)) {
                return {
                    ...buff,
                    values: element.svals
                };
            }
            return null;
        }).filter(item => item !== null);
    });

    if (filteredBuffs.length === 0) {
        return null;
    }

    return (
        <div>
            {
                filteredBuffs.map((buff, buffIndex) => (
                    <div key={buffIndex} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {buff.icon && (
                                <img src={buff.icon} alt={buff.type} style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                            )}
                            <h3>{buff.name}</h3>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {
                                buff.values && buff.values.map((sval, svalIndex) => (
                                    <span key={svalIndex} style={{ minWidth: '100px', textAlign: 'center', border: '1px solid #eee', padding: '5px' }}>
                                     {sval?.Value * 0.1 + "%"}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
