import React from 'react'
import Swal from "sweetalert2";
const Card = () => {
   
  const data = [
      {name:"i'll be missing you", description:"“I’ll Be Missing You” is a heartfelt tribute song about grief, love, and remembering a lost friend."},
      {name:"Cupid fifty fifty", description:"“Cupid” by FIFTY FIFTY is a light, catchy song about longing for love and hoping Cupid helps find the right person."},
      {name:"renai circulation", description:"“Renai Circulation” is a cute, upbeat song about having a shy crush and slowly realizing feelings of love with a playful and cheerful tone. "}  

  ]

  // const handleClickDownload =()=>{
  //   alert("Downloading...")
  // }



  
const handleClickDownload = () => {
  Swal.fire({
    title: "Downloading...",
    text: "Please wait while your file is being prepared 🎵",
    icon: "info",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center'>
         {data.map((item,index)=>(
          
      <div className=' w-90 px-3 py-2 bg-zinc-100 rounded-md'>
        <h3 className='font-semibold text-xl'>{item.name}</h3>
        <p className='text-sm mt-2'>{item.description}</p>

        <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'> Download Now</button>
         </div>
         ))}
    </div>
  )
}

export default Card