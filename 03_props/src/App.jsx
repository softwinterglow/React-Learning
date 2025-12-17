import Card from './components/Card'



function App(){
  
  return(
 <>

    <div className="parent">
         <Card seriesName="stranger things" description ="this is very good series" image="https://images.unsplash.com/photo-1559587393-cded28a4f78d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card seriesName="umbrella academy" description="its an absoulute good series" image="https://imgs.search.brave.com/cf4EbTjeVkn4Fei1TkYH8HnuiucoOwnUP3PlTS-wDeA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTErblpMWG9IRkwu/anBn"/>
        
    </div>
 </>
  )
}

export default App
