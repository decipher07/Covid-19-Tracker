/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './App.css';
import {MenuItem, FormControl, Select, Card, CardContent, } from "@material-ui/core"

function App() {

  const [countries, setCountries] = useState([])

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






  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid 19 Tracker </h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
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
