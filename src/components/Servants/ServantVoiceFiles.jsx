export default function ServantVoiceFiles( {profile} ) {

    const servantVoices = profile.voices.map(({voiceLines}) => voiceLines);

    console.log(servantVoices)

    return (
        <>
            <h1 className="trait-title">Voice Lines</h1>

            <div className="servant-voices-table">
                <table className="servant-v-t">
                    <tbody>
                        {servantVoices.map((element) => element.map(({name, audioAssets, id}) => 
                            ( 
                            <>
                                <tr key={id[0]} ><td className="voice-first-col">{name}</td></tr>
                                <tr className="voice-row">{audioAssets.map((element,index) => ( <td key={index} className="voice-td"><a href={element} target="blank">{name}</a></td> ))}</tr>
                            </>
                            )))}
                    </tbody>
                </table>
            </div>

        </>
    )
}