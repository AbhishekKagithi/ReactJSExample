function Studentdetails()
{

    let studentObject = {sid : 501,sname : "Abhishek", course : "B Tech", age : 22, total : 767};
    return(
        <>
        {
           <pre> 
          <h1> Student Details </h1>

          Student id : {studentObject.sid}<br/>
          Student name : {studentObject.sname}<br/>
          Student age : {studentObject.age}<br/>
          Student course : {studentObject.course}<br/>
          Student marks : {studentObject.total}<br/>


          </pre> 
        }
         </>
    )
}

export default Studentdetails;