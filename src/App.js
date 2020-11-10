/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map'
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
          console.log(countries)
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode); 
    setCountry(countryCode);
    console.log(country)
  }

  return (
    <div className="app">

      <div className="app__left">
          {/* Header */}
          {/* Title + Select Input Dropdown field */}

          <div className="app__header">
            <h1>Covid 19 Tracker </h1>
            <FormControl className="app__dropdown">
              <Select variant="outlined" onChange={onCountryChange} value={country}>
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
                }
              </Select>
            </FormControl>
          </div>

          <div className="app__stats">
                <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
                <InfoBox title="Recovered" cases={123} total={2000} />
                <InfoBox title="Death" cases={123} total={2000} />
          </div>

          {/* Map */}
          <Map />  
      </div>
      
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          {/* Table */}
          <h3>Worldwide new Cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
