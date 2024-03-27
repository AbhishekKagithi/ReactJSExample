import {useState} from 'react';
function StateEvent()
{
    const[count,setCount] = useState(1);


function buttonClick()
{
    setCount(count + 1);
}

return(
    <>
   
        <h3>Event Handling</h3>

        <hr/>

        <input type = "button" onClick = {buttonClick} value = "UpdateCount"/>

        <h1>Counter : {count} </h1>

      
    </>
);
}

export default StateEvent;