/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './App.css';
import {MenuItem, FormControl, Select, Card, CardContent, } from "@material-ui/core"

function App() {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2 // UK, USA, FR
          }))
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid 19 Tracker </h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
            }
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select Input Dropdown field */}

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      
      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
