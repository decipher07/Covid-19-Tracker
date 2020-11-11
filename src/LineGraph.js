import React, { useState , useEffect} from 'react'
import {Line} from 'react-chartjs-2'

function LineGraph() {
    const [data, setData] = useState({})
    //https://disease.sh/v3/covid-19/historical/all?lastdays=120
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    }, [])

    const buildChartData = data => {
        const chartData = [];
        let lastDataPoint;
        
    }

    return (
        <div>
            <h1>I am a import from 'react-apollo' </h1>
            {/* <Line data options/> */}
        </div>
    )
}

export default LineGraph
