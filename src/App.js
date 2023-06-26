
import './App.css';
import { useState } from 'react';


function App() {
  const[inputValue, setInputValue]= useState('black');



return(

  <div className='App'>
<button onClick={()=>{ inputValue=='red'? setInputValue('black') : setInputValue('red') }}>Change</button>

{ <h1 style={{color: inputValue}}>My Name is Kidus</h1> }
  </div>
)

}




export default App;