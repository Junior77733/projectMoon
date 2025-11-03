export default function ServantCoins( {coins} ) {

    return (
        <>
            <h1 className="trait-title">Coins</h1>

            <table>
                <tbody>
                    <tr>
                        <td className="first-col">Use Case</td>
                        <td className="first-col">Cost</td>
                    </tr>
                    <tr>
                        <td className="second-col">When Summoning</td>
                        <td className="second-col">
                            <div className="coin-cost-tab">
                                <img src={coins.item.icon} alt={coins.item.name} />
                                <span>{coins.summonNum}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="second-col">Unlocking Appends</td>
                        <td className="second-col">
                            <div className="coin-cost-tab">
                                <img src={coins.item.icon} alt={coins.item.name} />
                                <span>120</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="second-col">Per Grail Past 100</td>
                        <td className="second-col">
                            <div className="coin-cost-tab">
                                <img src={coins.item.icon} alt={coins.item.name} />
                                <span>30</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}