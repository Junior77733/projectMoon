export default function TableAppends({ appendPassive }) {

    const getAppendSkillData = appendPassive.map(({skill : {functions, name, icon}}) => {

        if (functions[0].funcType === "gainNp") {

            const typeOneValue = functions[0]?.svals.map(element => `${element?.Value / 100}%`)

            return {
                name : name,
                icon : icon,
                sval : typeOneValue
            }
        } else if (functions[0].funcType === "addStateShort") {

            const typeTwoValue = functions[0]?.svals.map(element => `${element?.Value / 10}%`)

            return {
                name : functions[0]?.buffs[0]?.name,
                icon : icon,
                sval : typeTwoValue
            }
        } else {

            const typeThreeValue = functions[0]?.svals.map(element => `${element.Count}`)

            return {
                name : functions[0]?.buffs[0]?.name,
                icon : icon,
                sval : typeThreeValue
            }
        }
    });

    return (
        <>
            <table>
                <tbody>
                    {getAppendSkillData.map(({name, icon, sval}) => (
                        <>
                            <tr>
                                <td className="first-col">{ <img src={icon} alt={name} /> }</td>
                                <td className="first-col">{name}</td>
                                <td className="second-col">{sval.map((num, index) => (
                                    <span className="appendVal" key={index}>{num}</span>
                                ))}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}