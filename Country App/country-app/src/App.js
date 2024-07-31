import React, { useEffect, useState } from 'react'
import Countries from './components/Countries';
import Search from './components/Search';

import './App.css'

const url = 'https://restcountries.com/v3.1/all';

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const fetchData = async (url) => {

      try{
        const response = await fetch(url);
        const data = await response.json();

        //console.log(data);
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
        setError(null);

        // setTimeout(() =>{
        //   console.log(countries);
        // },5000);
        
      }
      catch(error){
        setIsLoading(false);
        setError(error);
        
      }

      
    }

    useEffect(() => {
        fetchData(url);
        
    }, [])

    // useEffect(() => {
    //   console.log("Hello:");
    //   console.log(countries); // Log the countries when it changes
    // }, [countries]);
    

    const handleRemoveCountry = (name) =>{
      //alert(country);
      const filter = filteredCountries.filter((country) => 
        country.name.common !== name
      )
      setFilteredCountries(filter);
      
    }

    const handleSearch = (searchValue) =>{
      //alert(searchValue);
      const value = searchValue.toLowerCase();
      const newCountries = countries.filter((country) =>{
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value);

      })
      setFilteredCountries(newCountries);
    }

    return (
      <div className='app_container'>
          <h1>Country explorer</h1>
          <Search onSearch = {handleSearch}/>
          {isLoading && <h2>Loading...</h2>}
          {error && <h2>{error.message}</h2>}
          {countries && <Countries countries = {filteredCountries} onRemoveCountry = {handleRemoveCountry}/>}
      </div>
    )
}

export default App
