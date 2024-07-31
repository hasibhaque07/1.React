import React from 'react'

import style from './Country.module.css'

const Country = (props) => {
    //const {country} = props;
    //const {name, flags, capital, population, area} = country;

    const {name, flags, capital, population, area} = props.country;

    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    }
    return (
        <article>
            <div className={style.countryContainer}>
                <img src={flags.png} alt = {name.common}/>
                <div className={style.text}>
                    <p>Name: {name.common}</p>
                    <p>Capital: {capital}</p>
                    <p>Population: {population}</p>
                    <p>Area: {area}</p>
                </div>
                <button className={style.btn} onClick={()=>{
                    handleRemoveCountry(name.common)
                }}>Remove Country</button>
            </div>
            
        </article>
    )
}

export default Country
