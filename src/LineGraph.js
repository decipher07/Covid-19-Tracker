import React, { useState , useEffect} from 'react'
import {Line} from 'react-chartjs-2'

function LineGraph() {
    const [data, setData] = useState({})
    //https://disease.sh/v3/covid-19/historical/all?lastdays=120
    
    
    return (
        <div>
            <Line data options/>
        </div>
    )
}

export default LineGraph
