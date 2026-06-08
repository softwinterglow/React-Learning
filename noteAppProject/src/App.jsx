import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    if (!title.trim() || !details.trim()) return

    setTask([...task, { title, details }])
    setTitle('')
    setDetails('')
  }

  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-white selection:text-black'>
      <div className='max-w-6xl mx-auto p-6 md:p-12 space-y-12'>
        
        <form onSubmit={submitHandler} className='max-w-xl'>
          <div className='flex flex-col gap-5'> 
            <h2 className='text-2xl font-bold tracking-tight text-white mb-2'>Create New Note</h2>
            
            <input
              type="text" 
              placeholder='Enter note heading...' 
              className='px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl outline-none placeholder:text-zinc-500 text-sm focus:border-zinc-500 transition-colors duration-200'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
              placeholder='Enter details...'
              className='px-4 py-3 bg-zinc-900 border border-zinc-800 h-32 rounded-xl outline-none placeholder:text-zinc-500 text-sm focus:border-zinc-500 transition-colors duration-200 resize-none'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button className='bg-white text-zinc-950 hover:bg-zinc-200 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm active:scale-[0.98] mt-2 self-start'>
              Add Note
            </button>
          </div>
        </form>

        <hr className='border-zinc-900' />
       
        <div className='space-y-6'>
          <h1 className='text-xl font-semibold tracking-tight text-zinc-400'>Your notes</h1>
          
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {task.length === 0 ? (
              <p className="text-zinc-500 text-sm col-span-full">No notes added yet. Create one above!</p>
            ) : (
              task.map((note, index) => (
                <div 
                  key={index} 
                  className='p-5 h-40 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between group hover:border-zinc-700 transition-colors duration-200'
                >
                  <div className="overflow-hidden">
                    <h3 className='font-semibold text-white text-base mb-1 truncate'>{note.title}</h3>
                    <p className='text-xs text-zinc-400 line-clamp-3 leading-relaxed'>{note.details}</p>
                  </div>
                  <span className='text-[10px] uppercase tracking-wider font-semibold text-zinc-600 group-hover:text-zinc-400 transition-colors'>
                    Just now
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App