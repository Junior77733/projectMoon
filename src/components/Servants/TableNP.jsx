import ServantNP from '../../components/servant-np.json'

export default function TableNP( { noblePhantasms, collectorId } ) {

  const getNP = ServantNP.find(
    element => element.collectionNo === collectorId
  )

  if (!getNP) {
    return <p>This Servant {collectorId} Noble Phantasm information is not available...</p>
  }

  return (
    
    <>
      {noblePhantasms.map(( {name, type, rank, npDistribution}, index ) => (
        <div className="skill-table">
        <table className='servant-profile'>
          <tbody>
            <tr>
              <td className='first-col'>Name</td>
              <td colSpan={5} className='second-col'>{name}</td>
            </tr>
            <tr>
              <td className='first-col'>Type</td>
              <td className='second-col'>{type}</td>
              <td className='first-col'>Rank</td>
              <td className='second-col'>{rank}</td>
              <td className='first-col'>Hits</td>
              <td className='second-col'>{npDistribution.map((element, index) => (<span key={index} style={{padding:'3px'}}>{element}%</span>))}</td>
            </tr>
            <tr>
              <td className='first-col'>Details</td>
              <td colSpan={5} className='second-col'>{getNP.skills[index]}</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        </div>
      ))}
    </>
  )
}
