export default function TableProfile({ gender, 
                                        name, 
                                        servantClass, 
                                        rarity, 
                                        cost, 
                                        attribute, 
                                        alignment, 
                                        hpBase, 
                                        atkBase, 
                                        hpMax, 
                                        atkMax, 
                                        npGain, 
                                        starGen, 
                                        starAbsorb, 
                                        instantDeath, 
                                        cardDeck })
{

    return (
        <table className="servant-profile">
            <caption className="table-heading">⮞ Servant Profile ⮜</caption>
            <tbody>
                <tr className="row">
                    <td className="first-col">Name</td>
                    <td colSpan={3} className="second-col">{name}</td>
                </tr>
                <tr>
                    <td className="first-col">Class</td>
                    <td colSpan={3} className="second-col">{servantClass}</td>
                </tr>
                <tr>
                    <td className="first-col">Gender</td>
                    <td colSpan={3} className="second-col">{<a href="/servants">{gender}</a>}</td>
                </tr>
                <tr>
                    <td className="first-col">Rarity</td>
                    <td className="second-col">{rarity}</td>
                    <td className="first-col">Cost</td>
                    <td className="second-col">{cost}</td>
                </tr>
                <tr>
                    <td className="first-col">Attribute</td>
                    <td colSpan={3} className="second-col">{attribute}</td>
                </tr>
                <tr>
                    <td className="first-col">Alignment</td>
                    <td colSpan={3} className="second-col">{alignment}</td>
                </tr>
                <tr>
                    <td className="first-col">Base HP</td>
                    <td className="second-col">{hpBase}</td>
                    <td className="first-col">Max HP</td>
                    <td className="second-col">{hpMax}</td>
                </tr>
                <tr>
                    <td className="first-col">Base ATK</td>
                    <td className="second-col">{atkBase}</td>
                    <td className="first-col">Max ATK</td>
                    <td className="second-col">{atkMax}</td>
                </tr>
                <tr>
                    <td className="first-col">NP Gain</td>
                    <td className="second-col">{npGain}</td>
                </tr>
                <tr>
                    <td className="first-col">Star Absorb</td>
                    <td className="second-col">{starAbsorb}</td>
                </tr>
                <tr>
                    <td className="first-col">Star Gen</td>
                    <td className="second-col">{starGen}</td>
                </tr>
                <tr>
                    <td className="first-col">Death Chance</td>
                    <td className="second-col">{instantDeath}</td>
                </tr>
                <tr>
                    <td className="first-col">Deck</td>
                    <td className="second-col">{cardDeck}</td>
                </tr>
            </tbody>
        </table>
    )

}
