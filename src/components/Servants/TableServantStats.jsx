export default function TableServantStats( {profile} ) {

    const servantStats = Object.entries(profile.stats).splice(0, 6)
    
    return (
        <div>
            <h1 className="trait-title">Stats</h1>
            <div className="stat-table">
                <table>
                    <tbody>
                        {servantStats.map((element, index) => (
                            <>
                                <tr key={index}><td className="stats-first-col">{element[0]}</td> <td className="stats-second-col">{element[1]}</td> </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}