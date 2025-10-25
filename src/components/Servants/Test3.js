const servant = [

    {
        extraAssets : {
            charaGraph : {
                Ascension : {
                    1 : "image 1",
                    2 : "image 2",
                    3 : "image 3",
                    4 : "image 4"
                },
                Costume : {
                    1 : "costume 1"
                }
            }
        }
    }

]

// console.log(servant[0]) //current servant array has 1 element called extraAssets -> extraAssets : { charaGraph: { ascension: [Object], Costume: [Object] } }

// console.log(servant[0]?.extraAssets) //charaGraph starting point, contains 2 object

// console.log(servant[0]?.extraAssets?.charaGraph)

// const attempt = Object.values(servant[0]?.extraAssets?.charaGraph).flatMap(element => element)

// console.log(attempt[0]) //[0] == Ascension8

// console.log(attempt[1]) //[1] == Costume

// console.log(attempt[1])

const ascension = {1: "img1", 2: "img2", 3: "img3", 4: "img4"}
const costume = {304: "cos1", 305: "cos3"}

const extraAssets = {...ascension, ...costume};

console.log(extraAssets)

console.log(Object.values(extraAssets))

// const indexCheck = extraAssets[1]

// console.log(Array.isArray(extraAssets))

// console.log(indexCheck)