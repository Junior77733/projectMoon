export default function TableAscensionMaterials( {ascensionMaterials} ) {

    const ascensionMats = Object.values(ascensionMaterials)

    return (
        <div className="material-container">
            <h1>Ascension Materials</h1>

            <table>
                <tbody>
                        <tr>
                            <td className="first-col">Materials</td>
                            <td className="first-col">QP</td>
                        </tr>
                    {ascensionMats.map(({items, qp}) => (
                        <tr>
                            <td className="material-first-col">
                                {items.map(({item, amount}) => ( <div><img className="material-img" src={item.icon} alt={item.name} title={item.name} />
                                <span>{amount}</span></div> ))}
                            </td>
                            <td className="first-col">{qp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}