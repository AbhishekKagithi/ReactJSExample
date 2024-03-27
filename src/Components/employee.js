

  function  Employee()
  {  

    let  coursesArray  = [ "HTML5", "CSS3", "JAVA SCRIPT", "REACT JS", "ANGULAR"];
   
    let resultArray =  coursesArray.map(item => 
        <li>{item}</li>
      );

    return  (
      <>
          <h3>Developing React JS Applications</h3> 
          <hr/>

          <ul>
           {resultArray}
          </ul>
          
                  
      </>      
    );
  }

  export default Employee;