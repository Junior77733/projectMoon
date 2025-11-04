export default function TableServantComments( {profile} ) {

    const { comments } = profile;

    return (
        <div className="comments">
            <table>
                <tbody>
                    {comments.map(({condType, comment, condMessage}) => (
                        
                        <>
                            <tr><th className="comment-first-col">Condition Type : {condType}</th></tr>
                            <tr><th className="comment-first-col">Condition Message : {condMessage}</th></tr>
                            <tr><td className="comment-second-col">{comment}</td></tr>
                            <tr><td style={{padding:'30px'}}>{" "}</td></tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}