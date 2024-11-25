 import { useState,useEffect } from 'react';

async function queryData(){
  return new Promise<number>((resolve,reject)=>{
    setTimeout(()=>{
      resolve(6666)
    },1000)
  })
}
 function App() {
  // 初始化为函数
  const [num,setNum] = useState(0);
  useEffect(()=>{
    queryData().then(data=>{
      setNum(data)
    })
  },[])
  return (
    <div className="App" onClick={()=>setNum((preNum)=>preNum+1)}>
    {num}      
    </div>
  );
}

export default App;
