const buffsType = [
        'upCommandall',
        'upCommandatk',
        'upAtk',
        'upDefence',
        'upStarweight',
        'upCriticalrate',
        'upCriticaldamage',
        'upCriticalpoint',
        'upStarweight',
        'upNPdamage',
        'upDropnp',
        'regainNP',
        'upDamage',
        'donotAct'
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
                type : "upDefence",
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
    }
]

// const hasAnyMatch = buffsType.some(value => altria.map(element => element.includes(value)));

// console.log(hasAnyMatch)


//accessing the 2 buffs arrays inside altria nicely.
// console.log(altria.map(element => element.buffs))

//this one accesses each buff array and displays the type property of each nicely, it also returns them in an array
// console.log(
//     altria.map(element => element.buffs.map(element => element.type))
// )

const MainArray = altria.flatMap(element => element?.buffs.map(element => element?.type))

const hasAnyMatch = buffsType.some(value => MainArray.includes(value))

console.log(hasAnyMatch)

if (hasAnyMatch) {
    const data = altria.map(element => element?.svals.map(element => element?.Value * 0.1 + "%"))
    console.log(data)
    const sortedArr = data.forEach(element => {element.forEach(innerValue => console.log(innerValue))})
}

console.log(MainArray)