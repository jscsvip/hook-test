import React, { useState } from 'react';

function Example() {
  // 创建一个保存 count 的 state，并给初始值 0
  const [count, setCount] = useState(0);
  // 定义一个年龄的 state，初始值是 42
  const [age, setAge] = useState(42);
  // 定义一个水果的 state，初始值是 banana
  const [fruit, setFruit] = useState('banana');
  // 定一个一个数组 state，初始值是包含一个 todo 的数组
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}