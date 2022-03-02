import React from 'react'

export default function FavoriteNames({favoriteNames,removeFromFavorites}) {
  return (
    <div className='favorites-container'>
        <p>Click a name to add</p>
       {
           favoriteNames.map(item=>{
               return <button onClick={()=>removeFromFavorites(item)} key={item.id} className={item.sex==='f' ? "female-button" : "male-button"}>{item.name}</button>
           })
       }
    </div>
  )
}
