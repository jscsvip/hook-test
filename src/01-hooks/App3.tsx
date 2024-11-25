 import { Reducer,useReducer,useState  } from 'react';

 interface Data {
  result: number;
}

interface Action {
  type: 'add' | 'minus',
  num: number
}
function reducer(state: Data, action: Action) {

  switch(action.type) {
      case 'add':
          return {
              result: state.result + action.num
          }
      case 'minus': 
          return {
              result: state.result - action.num
          }
  }
  return state;
}

function App() {
  // 初始化为函数
  // const [res,dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0});
  // 根据初始条件 初始化状态
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
    return {
        result: param === 'zero' ? 0 : 1
    }
});
  return (
    <div>
        <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
        <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
        <div>{res.result}</div>
    </div>
  );
}
// 用useState简化版
function App2() {
  const [res, setRes] = useState({ result: 0});

  return (
    <div>
        <div onClick={() => setRes({ result: res.result + 2 })}>加</div>
        <div onClick={() => setRes({ result: res.result - 1 })}>减</div>
        <div>{res.result}</div>
    </div>
  );
}
export default App;
