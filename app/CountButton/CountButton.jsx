import { useEffect,useState } from "react"
export default function CountButton(props){
    const [count, setCount] = useState(0)

    const buttonStyle = {
        backgroundColor: props.color,
        color: "white",
        padding: "5rem",
        borderRadius: "5px"
    }
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
        <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
        <div style={{fontFamily: "sans-serif", fontSize: "45px"}}>{count}</div>
        </div>
    )
}