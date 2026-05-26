import { useState } from "react"
function State(){
    const [count, setCount] = useState(0)
    const increase = () =>{
        setCount(count+1)
    }

    const decrease = () =>{
        setCount(count-1)
    }

return(
    <div>
        <h2>count: {count}</h2>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>
)

}

export default State