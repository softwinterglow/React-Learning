import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div className="card">
      <div className="top">

       
        <img src={props.image} />
        <button>save <Bookmark /></button>
      </div>
        <div className="center">
         <h3>{props.company} <span>{props.day}</span></h3>
         <h2>{props.jobName}</h2>

         <div>
            <h4>{props.time}</h4>
            <h4>{props.level}</h4>
        </div>
        </div>
       
      <div className="bottom">
        <div>
          <h3>{props.hourlyRate}</h3>
          <p>{props.location}</p>
        </div>
        <button>Aplly now</button>
      </div>
    </div>
  )
}

export default Card