import React from 'react'


localStorage.setItem("user","messi")
localStorage.setItem("artistName","kanye")

localStorage.setItem("name","taylor")

localStorage.removeItem("name")

const player ={
  name:"lamine",
  age:18,
  club :"fc barcelona"
}




localStorage.setItem("player", JSON.stringify(player))


const user = JSON.parse(localStorage.getItem("user"))
console.log(user)

const App = () => {
  return (
    <div>App</div>
  )
}

export default App