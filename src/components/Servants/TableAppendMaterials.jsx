export default function TableAppendMaterials( {appendSkillMaterials} ) {

    const appendMaterials = Object.values(appendSkillMaterials)

    return (
        <div className="material-container">
            <h1>Append Materials</h1>

            <table>
                <tbody>
                        <tr>
                            <td className="first-col">Materials</td>
                            <td className="first-col">QP</td>
                        </tr>
                    {appendMaterials.map(({items, qp}) => (
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