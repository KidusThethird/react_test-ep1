
import './App.css';
import { User   } from './Users';

function App() {

  
const planets = [
  {name:"Mars" , isGasPlanet: false },
   {name:"Earth" ,  isGasPlanet: false },
    {name:"Jupiter",  isGasPlanet: true },
    {name:"Venus",  isGasPlanet: true },
    {name:"Neptune",  isGasPlanet: true },
    {name:"Uranus",  isGasPlanet: true }
   
]

return(
  planets.map((planet)=>{
  return ( 
    
  planet.isGasPlanet == true ? <h2>{planet.name}</h2> : <h2></h2>
  
    
    
    
    )
  })
 
)
 
}




export default App;
  