import { useState } from "react"

export default function Counters() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const reduceCount = count - 1;
        if(count>0){
            setCount(reduceCount)
        }
    }

    return (
        <div style={{border: '2px solid yellow', marginBottom: '10px', paddingBottom: '15px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Count</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
