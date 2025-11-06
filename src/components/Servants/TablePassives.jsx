export default function TablePassiveSkill( { classPassive } ) {

    return (
        <div className="passive-table">
            <table  className="passive-container">
                <tbody>
                    {classPassive.map(({ id, name, icon, detail, functions }) => (
                        <>
                            <tr key={id}>
                                <td className="first-col" colSpan={3}>{name}</td>
                            </tr>
                            <tr key={id}>
                                <td className="second-col"><img src={icon} alt={name} /></td>
                                <td className="second-col"><span>{detail}</span></td>
                                <td className="second-col"><span>{functions[0]?.svals[9]?.Value / 10}%</span></td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}