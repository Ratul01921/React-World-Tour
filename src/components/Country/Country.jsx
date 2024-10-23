import "./country.css"

const Country = ({country}) => {
    const {name, flags, population, area, capital, languages, timezones, region} = country;
    return (
        <div className="country">
            <h3 >Name: {name?.common}</h3>
            <img className="country-img" src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Region : {region}</p>
            <p>Languages: {languages?.eng || 'not found'}</p>
            <p>Timezones: {timezones}</p>
        </div>
    );
};

export default Country;