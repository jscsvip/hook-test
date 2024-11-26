import { useState,useEffect } from 'react';

const getSize = () => {
  return window.innerWidth > 1000 ? "large" : "small";
}
const useWindowSize = () => {
  const [size, setSize] = useState(getSize());
  useEffect(() => {
  const handler = () => {
      setSize(getSize())
    };
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);
  
  return size;
};
export default function Counter() {
// 窗口大小作为 Hooks 的数据源 这样当窗口大小发生变化时，使用这个 Hook 的组件就都会重新渲染。

const size = useWindowSize(); 
  return (
    <div>
      <button>
        { size}
      </button>
    </div>
  );
}