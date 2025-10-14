export default function TableSkills({ skills }) {

    if (!skills || skills.length === 0) {
        return <p>not available...</p>
    }

    return (
    <div className="skill-table">
    <table >
      <caption class="table-heading">⮞ Active Skills ⮜</caption>
      <tbody>
        {skills.map(({ id, name, detail, icon, coolDown }) => (

          <tr key={id}>
            <td className="first-col">{name}</td>
            <td className='second-col'><img src={icon} /></td>
            <td className='second-col'>{detail}</td>
            <td className="first-col">{`${coolDown[0]}/${coolDown[5]}/${coolDown[9]}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
}