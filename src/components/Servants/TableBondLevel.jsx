export default function TableBondLevel( {bondGrowth} ) {

    return (
        <div>
            <h1 className="trait-title">Bond Level</h1>
            <table>
                <tbody className="bond-and-stats">
                    {bondGrowth.map((element, index) => (
                        <div>
                            <tr><td className="first-col">{index + 1}</td></tr>
                            <tr><td className="second-col">{element.toLocaleString('en-US')}</td></tr>
                        </div>
                    ))}
                </tbody>
            </table>
        </div>
    )
}