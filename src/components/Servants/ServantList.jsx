import { useEffect, useState } from "react"

export default function ServantList() {

    const [servantList, setServantList] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchServantList = async () => {

        const createList = await fetch(`https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json`)
            .then(Response => {
                if (!Response.ok) {
                    throw new Error("Request Failed!")
                }
                return Response.json()
            })

        const result = await Promise.all(createList);
        return result.flatMap(element => ({name: element.name}))

    }

    useEffect(() => {

        async function initiateFetchCall() {

            try {
                const result = await fetchServantList()
                setServantList(result)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setIsLoading(false)
            }
        }

        initiateFetchCall()

    },[])

    if (error) {
        return <p>ERROR!!! {error.message}</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    // console.log(servantList[0]?.name)

    const cut = servantList.slice(0, 10)

    return (
        <div>
            {cut.map((element, index) => ( <p key={index}>{element.name}</p> ))}
        </div>
    )
}