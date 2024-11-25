import { useEffect, useState } from 'react';

function App() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log(count);
            // 闭包陷阱
            // setCount(count + 1);
             setCount(count => count + 1);
        }, 1000);
    }, []);

    return <div>{count}</div>
}

export default App;
