import { useState } from 'react'
import {puppyList} from './data.js'


import './App.css'

function App() {
  
  console.log("puppyList: ", puppyList);
  const [puppies, setPuppies] = useState(puppyList)
  
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick() {
  
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    
    <div className="App"> 
        <h1>Puppy Pal App</h1>
        {featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )}
    {

      puppies.map((puppy) => {

        
        return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        

       
        

      })
    }
    
    </div>

  
  );
}

export default App
