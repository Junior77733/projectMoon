export default function TableBondLevel( {bondGrowth} ) {

    //hard code it instead of autoing it for better design.
    const bondTen = bondGrowth.splice(0, 9);


    return (
        <div>
            <h1 className="trait-title">Bond Level</h1>
            <div className="stat-table">
                <table>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}