import ReactMarkdown from 'react-markdown'
import servantSkill from '../servant-skill.json'
import TableSkillValues from './TableSkillValues'

export default function TableSkills({ collectorId, skills }) {

    if (!skills || skills.length === 0) {
        return <p>not available...</p>
    }

    const match = servantSkill.find(
      (collection) => collection.collectionNo === collectorId
    )

     if (!match) {
      return <p>No matching skill collection found for collection number: {collectorId}</p>;
    }

    return (
    <div className="skill-table">
    <table >
      <caption className="table-heading">⮞ Active Skills ⮜</caption>
      <tbody>
        <tr>
          <td className='first-col'>Name</td>
          <td className='first-col'>Icon</td>
          <td className='first-col'>Description</td>
          <td className='first-col'>CoolDown</td>
        </tr>
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
            <tr className='first-col'>
                <td colSpan={4} className='second-col'><TableSkillValues functions={functions} /></td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
    </div>
    )
}