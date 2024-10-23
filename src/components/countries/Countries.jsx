import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/country";
import './countries.css'

export default function Countries() {

  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleCountriesVisited = country => {
    console.log('the visited county')
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry)
  
  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited Country:{visitedCountry.length}</h3>
        <ul>
          {
            visitedCountry.map(country => <li key={country.cca3}> {country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="countries-container">
        {
          countries.map(country => <Country 
            key={country.cca3} 
            handleCountriesVisited={handleCountriesVisited}
            country={country}></Country>)
        }
      </div>
    </div>
  )

}
