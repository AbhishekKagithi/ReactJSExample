function City()
{
    let CityList = ["Hyderabad","Tirupati","Madanapalle","Delhi","Kolkata","Kadapa","Guntur"];

    let allCities = CityList.map(city => <li>{city}</li>);
    return (
        <>
        {
            <div>
            <h1>List of Indian Cities</h1>

            <ol>
               {allCities}
            </ol>
            </div>
        }
        </>
    )
}

export default City;