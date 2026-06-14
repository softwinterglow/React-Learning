
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
     <nav className='mt-10 flex justify-center gap-10'>
      <NavLink style={(e)=>{
        return {
          color: e.isActive?"tomato":"",
        }}} to="/"  >Home</NavLink>
      <NavLink style={(e)=>{
        console.log(e)
        return {  
          color: e.isActive?"tomato":""
        }
      }

      } 
      to="/user">user</NavLink>
      <NavLink style={(e)=>{
        return{
          color:e.isActive?"tomato":""
        }
      }} to="/about">about</NavLink>

    </nav>
  )
}

export default Nav