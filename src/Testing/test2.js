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

    const excludedPercentageBuffs = [
        'reduceHP',
        'donotAct'
    ]

    const functionState = [
        'addStateShort',
        'addState',
    ]


const altria = [
    {
        funcId : 110,
        funcType : "addStateShort",
        funcTargetType : "self",
        funcPopupText : "Arts Up",
        funcPopupIcon : "image",
        functvals : [],
        overWriteTvalsList : [],
        funcquestTvals : [],
        script : {},
        funcGroup : [],
        buffs : [
            {
                id : 101,
                name : "Arts Up",
                originalName : "Arts Up",
                detail : "Increase Arts Card effectiveness",
                icon : "ArtsIcon",
                type : "upCommandall",
                buffGroup : 0,
                script : {},
                originalScript : {},
                vals : [
                    {
                        id : 3004,
                        name : "buffPositiveEffect"
                    },
                    {
                        id : 3006,
                        name : "buffIncreaseDamage"
                    }
                ],
                tvals : [
                    {
                        id : 5000,
                        name : "canBeInBattle"
                    },
                    {
                        id : 4001,
                        name : "cardArts"
                    }
                ],
                ckSelfIndv : [],
                ckOpIndv : [],
                maxRate : 5000
            },
        ],
        svals : [
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 200
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 210
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 220
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 230
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 240
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 250
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 260
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 270
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 280
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 290
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 300
            },
        ]
    },
    {
        funcId : 182,
        funcType : "addState",
        funcTargetType : "ptAll",
        funcTargetTeam : "playerAndEnemy",
        funcPopupText : "DEF Up",
        funcPopupIcon : "image",
        functvals : [],
        overWriteTvalsList : [],
        funcquestTvals : [],
        script : {},
        funcGroup : [],
        buffs : [
            {
                id : 146,
                name : "DEF Up",
                originalName : "DEF Up",
                detail : "Increase DEF",
                icon : "DEFicon",
                type : "donotAct",          //returns false since donotAct is NOT in percentageBuffValues
                buffGroup : 0,
                script : {},
                originalScript : {},
                vals : [
                    {
                        id : 3004,
                        name : "buffPositiveEffect"
                    },
                    {
                        id : 3006,
                        name : "buffIncreaseDefence"
                    },
                    {
                        id : 3040,
                        name : "buffDefenceUp"
                    },
                    {
                        id : 3058,
                        name : "buffDefup"
                    }
                ],
                tvals : [],
                ckSelfIndv : [],
                ckOpIndv : [],
                maxRate : 5000
            },
        ],
        svals : [
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 100
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 110
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 120
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 130
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 140
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 150
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 160
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 170
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 180
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 190
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 200
            },
        ]
    },
    {
        funcId : 182,
        funcType : "gainNP",
        funcTargetType : "ptAll",
        funcTargetTeam : "playerAndEnemy",
        funcPopupText : "DEF Up",
        funcPopupIcon : "image",
        functvals : [],
        overWriteTvalsList : [],
        funcquestTvals : [],
        script : {},
        funcGroup : [],
        //empty buffs array
        buffs : [
            {},
        ],
        svals : [
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 300
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 320
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 340
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 360
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 380
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 400
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 420
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 440
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 460
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 480
            },
            {
                Rate : 1000,
                Turn : 3,
                Count : -1,
                Value : 500
            },
        ]
    }
]


const filteredBuffs = altria.map(element => {
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
            // console.log(getNPvalue)
            return getNPvalue;
        }
        else {
            return [];
        }
    })


    // console.log(percentageBuffValues.includes(altria[0].buffs?.type))

    // console.log(altria[1].buffs[0].type)

    console.log(filteredBuffs)
    

    //altria.buffs.type DOES NOT WORK SINCE WE CANNOT ACCESS buffs (which is an array with Object notation)
    //This is why the above main if statement returns false for the first two elements.

    // console.log(filteredBuffs)
    // console.log("==============================")
    // console.log(filteredBuffs[2])

    