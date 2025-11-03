export default function TableSkillMaterials( {skillMaterials} ) {

    const materials = Object.values(skillMaterials);

    return (
        <div className="material-container">
            <h3 className="material-title">Skill Materials</h3>

            <table>
                <tbody>
                        <tr>
                            <td className="first-col">Materials</td>
                            <td className="first-col">QP</td>
                        </tr>
                    {materials.map(({items, qp}) => (
                        <tr>
                            <td className="material-first-col">
                                {items.map(({item, amount}) => ( <div><img className="material-img" src={item.icon} alt={item.name} title={item.name} />
                                <span>{amount}</span></div> ))}
                            </td>
                            <td className="first-col">{qp.toLocaleString('en-US')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}