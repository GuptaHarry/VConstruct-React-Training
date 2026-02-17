import React, { useEffect, useState } from "react";


export default function PublicHolidays_Brute (){

    const [countriesList , setCountriesList] = useState([]);
    const [holidays , setHolidays ] = useState([]);
    const [selectedCountry , setSelectedCountry] = useState("NL");

    async function handleClick( value){
    console.log(value);
    setSelectedCountry(value);
    fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${value}&languageIsoCode=EN&validFrom=2022-01-01&validTo=2022-12-31`)
    .then( res => res.json())
    .then(data => {
        console.log(data);
        setHolidays(data);
 });
 }

    useEffect(()=>{

      fetch("https://openholidaysapi.org/Countries?languageIsoCode=EN")
      .then(res=>res.json())
      .then( data => setCountriesList(data));
    
      const SetValues = async()=>{
        handleClick(selectedCountry);
      }
      SetValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
   
    return (
        <>
        <select value={selectedCountry} onChange={(e)=>handleClick(e.target.value)}>
        {
          countriesList.map( country => {
            return <option key={country.isoCode} value={country.isoCode} 
            >{country.name[0].text}</option>
          })
        }
        </select>

        <ul>
            {
                holidays.map( holiday => {
                    return <li key={holiday?.id} >{holiday?.name[0]?.text}</li>
                })
            }
        </ul>
        </>
    )
}
