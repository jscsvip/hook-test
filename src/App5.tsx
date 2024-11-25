import { useState } from "react";
import { produce } from "immer";
function App() {
    const [obj, setObj] = useState({
        a: {
            c: {
                e: 0,
                f: 0
            },
            d: 0
        },
        b: 0
    });
    // useState 需要返回一个新的对象，才会触发渲染,因为对象引用没变，同样不会重新渲染
    return (
        <div>
            <div onClick={() => {
                obj.a.c.e ++;
                setObj(obj);
            }}>加</div>
            <div onClick={() => {
               setObj(produce(obj, (obj) => {
                        obj.a.c.e ++;
                 }))
            }}>加,渲染</div>
            <div>{JSON.stringify(obj)}</div>
        </div>
    );
}

export default App;
