import React, { useState } from 'react'

const App = () => {

  const [value, setValue] = useState('')
   
    const submitHandler =(e)=>{
          e.preventDefault()
          console.log("form submitted")
    }

  return (
    <div>
        <form onSubmit={(e)=>{
           submitHandler(e)
        }} >

           <input onChange={(e)=>setValue(e.target.value)} type="text" name="" id="" placeholder='enter anything' />
           <button>Submit</button>

           <p>{value}</p>

        </form>


    </div>
  )
}

export default App