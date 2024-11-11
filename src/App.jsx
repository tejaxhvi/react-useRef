import React,{ useRef, useState } from "react";

function App  ()  {

    const [count , setcount] = useState(0);
    const timer = useRef();

    function startclock() {
         timer.current = setInterval(function (){
            setcount( count => count + 1);
            console.log("timersss")
        },1000)

    }

    function stopclock() {
        return clearInterval(timer.current)
    }

    return (
        <div style={{backgroundColor: "grey", padding: "10px" , paddingLeft: "50px"}}>
        <h2>{count}</h2>
        <button onClick={startclock}>start</button>
        <button onClick={stopclock}>stop</button>
    </div>
    )}

    export default App ;