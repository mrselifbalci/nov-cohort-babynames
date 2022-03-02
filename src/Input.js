import React from 'react'

export default function Input({getOnlyGirls,getOnlyBoys,getAllNames,handleFilter}) {
  return (
    <div className='input-container'>
      <input placeholder="Enter a name" type="text" onChange={handleFilter}/>
      <button className='all-button' onClick={getAllNames}>All</button>
      <button className='female-button' onClick={getOnlyGirls}>Girls</button>
      <button className='male-button' onClick={getOnlyBoys}>Boys</button>
    </div>
  )
}
