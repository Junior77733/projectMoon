import ReactMarkdown from 'react-markdown'
import servantSkill from './servant-skill.json'

export default function TableSkills({ collectorId, skills }) {

    if (!skills || skills.length === 0) {
        return <p>not available...</p>
    }

    const match = servantSkill.find(
      (collection) => collection.collectionNo == collectorId
    )

     if (!match) {
      return <p>No matching skill collection found for collection number: {collectorId}</p>;
    }

    return (
    <div className="skill-table">
    <table >
      <caption className="table-heading">⮞ Active Skills ⮜</caption>
      <tbody>
        {skills.map(({ id, name, icon, coolDown, functions }, index) => (
          <>
          <tr key={id}>
            <td className="first-col">{name}</td>
            <td className='second-col'><img src={icon} /></td>
            <td className='second-col'>
              <ReactMarkdown>
              {match.skills[index]}
              </ReactMarkdown>
              </td>
            <td className="first-col">{`${coolDown[0]}/${coolDown[5]}/${coolDown[9]}`}</td>
          </tr>
          <tr>
            <td className="first-col">{functions[0]?.buffs[0]?.name}</td>
            <td className='first-col'>{functions[0]?.svals[9]?.Value}</td>
          </tr>
          {index === 2 && <td className="table-heading">Post-Upgrade ➤</td>}
          </>
        ))}
      </tbody>
    </table>
    </div>
    )
}