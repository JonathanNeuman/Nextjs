import { useEffect,useState } from "react"
export default function CountButton(props){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + props.incrementBy)
    }
    function rollOverCount(){
        if (count > 10){
            setCount(0)
        }
    }
    useEffect(rollOverCount,[count])
    return (
        <div>
        <button onClick={handleClick}>+{props.incrementBy}</button>
        <div>{count}</div>
        </div>
    )
}