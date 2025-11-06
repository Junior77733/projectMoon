import { useState, useEffect } from 'react'

export default function TableBondLevel( {bondId, bondGrowth} ) {

    const [ce, setCE] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [bond] = useState(bondGrowth)

    useEffect(() => {

        const fetchCE = async () => {

            try {
                const getCE = await fetch(`https://api.atlasacademy.io/nice/JP/equip/${bondId}?lang=en&lore=true`)
            
                if (!getCE.ok) {
                    throw new Error("Request Failed!")
                }

                const data = await getCE.json()
                setCE(data)
            
            } catch(e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        } 
        fetchCE();}, [bondId])

        if (error) {
            return <p>Error!</p>
        }

        if (loading) {
            return <p>Loading...</p>
        }

        const { extraAssets, skills } = ce;

        const equipCE = Object.values(extraAssets.faces.equip);
        const bondTen = bond.slice(0, 10);
        const bondFifteen = bond.slice(10)
        const ceDetails = skills.map(element => element.detail)

    return (
        <>
            <h1 className="trait-title">Bond Level</h1>
            <div className='bond-levels'>
                <table className="bond-table">
                    <tbody>
                        <tr className="bond-table-row">{ bondTen.map((e, i) => ( <td key={e} className='bond-table-cell'>{i+1}</td> )) }</tr>
                        <tr>{ bondTen.map((e, i) => ( <td key={i} className='bond-table-cell-values'>{e}</td> )) }</tr>
                        <tr>
                            <td colSpan={2} className='bond-table-cell'> <img className='bond-img' src={equipCE} alt="" /> </td>
                            <td colSpan={8} className='bond-cell-detail'>{ceDetails}</td>
                        </tr>
                        <tr className="bond-table-row">{ bondFifteen.map((e, i) => ( <td colSpan={2} key={e} className='bond-table-cell'>{i+11}</td> )) }</tr>
                        <tr>{ bondFifteen.map((e, i) => ( <td colSpan={2}  key={i} className='bond-table-cell-values'>{e}</td> )) }</tr>
                    </tbody>
                </table>
            </div>
        </>
    )

}