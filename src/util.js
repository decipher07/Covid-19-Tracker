import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const sortData = (data) => {
    const sortedData = [...data];
    // return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
    sortedData.sort((a,b) => {
        if (a.cases > b.cases)
            return -1 ;
        return 1;
    })
    return sortedData;
}

// Draw cirlces on the map
export const showDataonMap = (data, casesType='cases') => (
    data.map(country => (

    ))
)
    