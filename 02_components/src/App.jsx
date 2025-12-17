
import Card from './components/card'
import Footer from './components/footer'
import Header from './components/header'



const App = () => {
  const user ="student";
  let age = 19;
  return (
    <>
   <Header/>
    <h1>hello {user} you are {age} year old</h1>

    
    {Card()} <br />
    <Card />
    <Footer/>
    
   </>
  )
}

export default App