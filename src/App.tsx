 import { useState } from 'react';

function App() {
  // 初始化为函数
  const [num,setNum] = useState(()=>{
    const num1 = 1 + 2
    const num2 = 3 + 4
    return num1 + num2
  });
  return (
    <div className="App" onClick={()=>setNum((preNum)=>preNum+1)}>
    {num}      
    </div>
  );
}

export default App;
