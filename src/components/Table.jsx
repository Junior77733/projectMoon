export default function Table({ gender, name, className, rarity, attribute, hpBase, atkBase, hpMax, atkMax, starGen, starAbsorb}) {

    return (
        <table className="servant-profile">
            <caption className="table-heading">-Servant Profile-</caption>
            <tbody>
                <tr className="row">
                    <td className="first-col">Name</td>
                    <td className="second-col">{name}</td>
                </tr>
                <tr>
                    <td className="first-col">Class</td>
                    <td className="second-col">{className}</td>
                </tr>
                <tr>
                    <td className="first-col">Gender</td>
                    <td className="second-col">{gender}</td>
                </tr>
                <tr>
                    <td className="first-col">Rarity</td>
                    <td className="second-col">{rarity}★</td>
                </tr>
                <tr>
                    <td className="first-col">Attribute</td>
                    <td className="second-col">{attribute}</td>
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
                    <td className="first-col">Star Absorb</td>
                    <td className="second-col">{starAbsorb}</td>
                </tr>
                <tr>
                    <td className="first-col">Star Gen</td>
                    <td className="second-col">{starGen}</td>
                </tr>
            </tbody>
        </table>
    )

}
