import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';

const Guang: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return <div>
    <input ref={ref}></input>
  </div>
}
//  forwardRef 用来传递 子组件的 ref
const WrapedGuang = React.forwardRef(Guang);

// 将App6 拆分成 父子组件 子组件为输入框 在父组件 调用子组件的focus方法
function App() {
  const ref = useRef<HTMLInputElement>(null);
 
  useEffect(()=> {
    console.log('ref', ref.current)
    ref.current?.focus()
  }, []);

  return (
    <div className="App">
      <WrapedGuang ref={ref}/>
    </div>
  );
}

export default App;
