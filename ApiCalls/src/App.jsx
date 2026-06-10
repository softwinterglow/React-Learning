import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData ]= useState([])

  const getData = async()=>{
const response= await axios.get('https://picsum.photos/v2/list')
console.log(response.data)
      

      setData(response.data)
}

  return (
    <div>

     <button onClick={getData}>get Data</button>
     <div>
     {data.map((elem,idx)=>{
      return <h3> {idx}) hello {elem.author} </h3>
      
     })}
     </div>

    </div>
  )
}

export default App