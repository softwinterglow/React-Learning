import React from 'react'

const Card = () => {

   const data = [{
    image:'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"amazon basics ", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolor at consequatur.",
    instock:true
   },
  {
    image:'https://plus.unsplash.com/premium_photo-1677706562562-5aa4caaa2fd4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:"Daily objects",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolor at consequatur. ",
    instock:false
  },

   {
    image:'https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:"apple",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolor at consequatur.Apple company a trillion dollar company ",
    instock:false
  },

]

  return (
    <div  className='w-full h-screen bg-zinc-200  flex items-center justify-center  gap-10'>
       {data.map((elem,index)=>(
         <div key={index} className='w-52 bg-zinc-100  rounded-r-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300 '>
            <img className='w-full h-full object-cover' src={elem.image} alt="amzonImageBox" />
        </div>
        <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>{elem.name}</h2>
        <p className='text-sm mt-5'>{elem.description}</p>
        <button className={`px-4 py-1  text-xs mt-3 rounded text-zinc-100 ${elem.instock?'bg-blue-600':'bg-red-600'} `}>
          {elem.instock? "Instock":"out of stock"}
        </button>
        
        </div>

        </div>
       ))}
    </div>
  )
}

export default Card



