import { useState} from "react";
function Product()
{
    const[proName,setProName] = useState("");
    const[proPrice,setProPrice] = useState("");
    const[quantity,setQuantity] = useState("");

    const[total,setTotal] = useState("");

    function buttonClick()
    {
          setTotal( proPrice * quantity);

    }

    return(
        <>
        <h1>Product details</h1>

        <fieldset>

        Product name : < input type = "text" onChange = {(e) => setProName(e.target.value)}/>
        Product price : <input type = "number" onChange = {(e) => setProPrice(e.target.value)}/>
        Product quantity : <input type = "number" onChange = {(e) => setQuantity(e.target.value)}/>
       <input type = "button" onClick = {buttonClick} value = "Get Total"/>
      <p> {total}</p>
      </fieldset>
        </>
    );

}

export default Product;