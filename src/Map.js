import React from 'react';
import './Map.css' 
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import {showDataonMap} from './util'

function Map({countries , casesType, center, zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            {/* Looping and Drawing Centers for different circles */}
            {showDataonMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
}

export default Map