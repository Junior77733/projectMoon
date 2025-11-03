export default function TableCostumeMaterials( {costumeMaterials} ) {

    const costumeMats = Object.values(costumeMaterials)

    return (
        costumeMats.length > 0 && <div className="material-container">
            <h3 className="material-title">Costume Materials</h3>

            <table>
                <tbody>
                        <tr>
                            <td className="first-col">Materials</td>
                            <td className="first-col">QP</td>
                        </tr>
                    {costumeMats.map(({items, qp}) => (
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