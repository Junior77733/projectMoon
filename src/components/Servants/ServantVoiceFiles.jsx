export default function ServantVoiceFiles( {profile} ) {

    const servantVoices = profile.voices.map(element => element.voiceLines);

    // console.log(servantVoices)

    return (
        <>
            <h1 className="trait-title">Voice Lines</h1>

        </>
    )
}