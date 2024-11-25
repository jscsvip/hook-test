 import { useState } from 'react';

function App() {
  const [num,setNum] = useState(0);
  return (
    <div className="App" onClick={()=>setNum(num+1)}>
    {num}      
    </div>
  );
}

export default App;
