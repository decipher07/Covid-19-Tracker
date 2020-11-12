/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map'
import Table from './Table'
import LineGraph from './LineGraph'
import {sortData} from './util'
import {MenuItem, FormControl, Select, Card, CardContent, } from "@material-ui/core"
import 'leaflet/dist/leaflet.css'
import {prettyPrintStat} from './util'

function App() {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -48.4796 })
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([])

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data)
    })
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        // console.log(typeof(data))
        const countries = data.map((country) => ({
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2 // UK, USA, FR
          }))

          const sortedData = sortData(data);
          // console.log(countries)
          setTableData(sortedData);
          setMapCountries(data);
          // console.log(sortedData)
          setCountries(countries);

        });
    };
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode); 
    
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all': `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCountry(countryCode);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4)
    })
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
                <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
                <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
                <InfoBox title="Death" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
          </div>

          {/* Map */}
          <Map countries={mapCountries} center={mapCenter} zoom={mapZoom}/>  
      </div>
      
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          <Table countries={tableData}/>
          {/* Table */}
          <h3>Worldwide new Cases</h3>
          <LineGraph />
          {/* Graph */}
        </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
