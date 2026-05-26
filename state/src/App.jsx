import React, { useState } from 'react'

const App = () => {
    const [val,setVal] = useState(0)
  return (
    <div>

        <h1>{val}</h1>
        <button onClick={()=>setVal(prev=>prev+1)} className='px-3 py-1 mt-3 bg-blue-400 rounded-full '>change</button>
    </div>
  )
}

export default App