import { useState } from "react";
import "./country.css"

const Country = ({country, handleCountriesVisited}) => {
    const {name, flags, population, area, capital, languages, timezones, region, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
            setVisited(!visited);
        
    }
    // console.log(handleCountriesVisited);
    return (
        <div className={`country ${visited && 'visited'} `}>
            <h3 >Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
             <p>Region : {region}</p>
            <p>Languages: {languages?.eng || 'not found'}</p>
            <p>code: {cca3}</p> 
            {/* <p><small>Timezones: {timezones}</small></p> */}
            <button onClick={() =>handleCountriesVisited(country)}>Mark visited Country</button> <br />
            <button onClick={handleVisited}>{visited? "Visited" : "Going"} </button> <br />
            {
                (visited ? "I have visited this Country": "I want to visit")
            }
        </div>
    );
};

export default Country;