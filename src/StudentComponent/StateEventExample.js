import { useState } from "react";

function StateEventEx()

{
    const[uname,setUname] = useState("");
    const[result,setResult] = useState("");

    function buttonClick()
    {
        let message = "WELCOME " + uname;

        setResult(message);
    }

    return(
        <>
        <h1>Event Handling in react</h1>

        <hr/>

        User name : 
                <input type = "text" onChange = { (e) => setUname(e.target.value)} />

                <input type = "button" onClick = {buttonClick} value = "Get Message" />

                <h1>{result}</h1>
        </>
    );
}

export default StateEventEx;