import React,{useState} from 'react';
import './App.css';
import data from './Data';
import FavoriteNames from './FavoriteNames';
import Input from './Input';


function App() {

  const [allnames,setAllNames] = useState(data);
  const [favoriteNames,setFavoriteNames]=useState([])



const getOnlyGirls=()=>{
  let filteredNames = data.filter(item=>item.sex==='f')
  setAllNames(filteredNames)
}

const getOnlyBoys=()=>{
  let filteredNames = data.filter(item=>item.sex==='m')
  setAllNames(filteredNames)
}
const getAllNames=()=>{
  setAllNames(data)
}


const handleFilter=(e)=>{
   let filtered = data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
   setAllNames(filtered)
}

const addToFavorites=(name)=>{
  const found = favoriteNames.some(item=>item.id===name.id);

 if(!found){
  setFavoriteNames([...favoriteNames,name])
 }

  
}

const removeFromFavorites=(name)=>{
   const updatedFavorites = favoriteNames.filter(item=>{
     return item.name !== name.name
   })

   setFavoriteNames(updatedFavorites)

}


  return (
    <div>
      <Input getOnlyGirls={getOnlyGirls} getOnlyBoys={getOnlyBoys} getAllNames={getAllNames} handleFilter={handleFilter} />
      <FavoriteNames favoriteNames={favoriteNames} removeFromFavorites={removeFromFavorites}/>
      <div className='names-container'>
          {
             allnames.map(item=>{
               return <button onClick={()=>addToFavorites(item)} key={item.id} className={item.sex==='f' ? "female-button" : "male-button"}>{item.name}</button>
             })
          }
      </div>
    </div>
  );
}

export default App;
