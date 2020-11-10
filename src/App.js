import './App.css';
import {MenuItem, FormControl, Select, Card, CardContent, } from "@material-ui/core"

function App() {
  return (
    <div className="app">
      <div className="app___header">
        <h1>Covid 19 Tracker </h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
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
