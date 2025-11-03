export default function TableServantStats( {profile} ) {

    const profileStats = Object.entries(profile.stats).map(element => element).splice(0,6);
    
    return (
        <div>
            <h1 className="trait-title">Stats</h1>

            <table>
                <tbody className="bond-and-stats">
                    {profileStats.map(element => (
                        <div>
                            <tr>
                                <td className="stats-first-col">{element[0]}</td>
                            </tr>
                            <tr>
                                <td className="stats-second-col">{element[1]}</td>
                            </tr>
                        </div>
                    ))}
                </tbody>
            </table>

        </div>
    )
}