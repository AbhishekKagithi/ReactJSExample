

import Login from "./StudentComponent/Login";
import Product from "./StudentComponent/Product";

import StateEvent from "./StudentComponent/StateEvent";
import StateEventEx from "./StudentComponent/StateEventExample";



function  App()
{  

  let  uname  = "Scott";
  let  city  = "Hyderabad";
  let email =  "scott@gmail.com";

  return  (
    <>
       

           <StateEvent/>
           <StateEventEx/>
           <Login/>
           <Product/>
    </>      
  );
}

export default App;