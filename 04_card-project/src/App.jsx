import Card from './components/Card'
import {Bookmark} from 'lucide-react'

function App() {
  return(

    <>

<div className="parent">
    <Card image="https://imgs.search.brave.com/uU9b7LBA01u46O4i-Xh3WyNsbaVVD4mmVNMUF0dhp3g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby1ibGFjay1h/bmQteWVsbG93LXZl/Y3Rvci00Njg2MDEx/MC5qcGc"
    company="amazon"  day="3 days ago" jobName="product manager" time="full time" level="senior product manager"  location="Banglore" hourlyRate="130$"
/>

<Card image="https://imgs.search.brave.com/jkbMhUzFlfiqzmU4cnbqA5ScYzzLfJqTT1pJXORG2CM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n"
    company="Google"  day="6 months ago" jobName="softwarte engineer" time="full time" level="mid level software engineer"  location="New york" hourlyRate="70$"
/>

<Card image="https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw"
    company="Meta"  day="5 years" jobName="UI/UX Designer" time="Part Time" level="Senior designer"  location="Los Angelas" hourlyRate="160$"
/>
    
  </div>
  </>
  )
    
  
}

export default App
