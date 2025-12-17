
import React from 'react'

const Card = (props) => {
 console.log(props.seriesName, props.description)
  return (
  
    <div className="card">
      <img src={props.image} alt="stranger things" />
      <h1>{props.seriesName}</h1>
      <p>{props.description}</p>
      <button>view</button>
    </div>
      

  )
}

export default Card
