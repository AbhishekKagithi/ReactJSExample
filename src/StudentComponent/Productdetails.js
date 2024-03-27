function Product()
{
    let Products = [
                    {pid : 12, pname : "Bat", price : 10000, qty : 2,category : "Cricket" },
                    {pid : 11, pname : "Ball", price : 1000, qty : 5,category : "Cricket" },
                    {pid : 14, pname : "Racket", price : 8000, qty : 6,category : "Badminton" },
                    {pid : 16, pname : "Shuttle", price : 800, qty : 6,category : "Badminton" },
    ];

    let productlist = Products.map((item,index) => 
    <tr key = {index}>
    <td>{item.pid}</td>
    <td>{item.pname}</td>
    <td>{item.price}</td>
    <td>{item.qty}</td>
    <td>{item.category}</td>
    </tr>
    )

    return(
        <>
        {
            <table border = "3">
               <thead>
                    <tr>
                        <th>product id</th>
                        <th>product name</th>
                        <th>product price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                    </thead>   

              <tbody>
               
                   
                    {productlist}
                    </tbody>
            </table>

}   
        </>
    )
}

export default Product;