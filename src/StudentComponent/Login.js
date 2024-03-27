import { useState } from "react";


function Login()
{
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const[result,setResult] = useState("");

    function buttonClick()
    {
        if(userName == "Abhi" && password == "Abhi@123")
        {
            setResult("Welcome Abhi")
        }
        else{
            setResult("the user is not registered");
        }
    }


    return(
        <>
        <h2>Working with State</h2>

        <hr/>
        <fieldset>
            <legend>User login</legend>

            User Name : < input type = "text" onChange = {(e) => setUserName(e.target.value)}/>
            <br/><br/>
             Password : < input type = "text" onChange = {(e) => setPassword(e.target.value)}/>
             <br/><br/>

             <input type = "button" onClick = {buttonClick} value = "Login"/>

                <p>{result}</p>
        </fieldset>
        </>
    );


}

export default Login;