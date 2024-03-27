function Students(){

    let allStudents = [
        {sid : 501,sname : "Abhishek", course : "B Tech", age : 22, total : 767},
        {sid : 503,sname : "Ameenuddin", course : "B Tech", age : 22, total : 789},
        {sid : 518,sname : "Hemanth", course : "B Tech", age : 21, total : 856},
        {sid : 526,sname : "Lokesh", course : "B Tech", age : 22, total : 770},
        {sid : 547,sname : "Sree", course : "B Tech", age : 22, total : 788},
        {sid : 552,sname : "Tasleem", course : "B Tech", age : 22, total : 780},
        {sid : 554,sname : "Ana", course : "B Tech", age : 22, total : 978}

    ];

    let details = allStudents.map((person, index)=>
    <div key={index} style={{ display: 'inline-block', margin: '20px' }}>
        
        <p>{person.sid}</p>
        <p> {person.sname}</p>
       <p>{person.course}</p>
       <p>{person.age}</p>
       <p>{person.total}</p>
       
        </div>);

    return(
        <>
        {
           <div>
           <hr/>
                {details}
            
                </div>
               

}
</>
    )
}

export default Students;