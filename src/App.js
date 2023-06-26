
import './App.css';
import { useState } from 'react';


function App() {


var [age, setAge] = useState(0);

const increase = () =>{
  setAge(age+1);
  console.log(age);
}
  return <div className='App'>
<h1>{age}</h1>
<button onClick={increase }>Increase Age</button>
  </div>

}




export default App;
  