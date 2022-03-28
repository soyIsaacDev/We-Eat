import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './map';
import "./mapstyle.css";

class GoogleLocationMap extends Component {
 
  render() {
    return (
       <Map 
        id="myMap"
        options={{
          center: { lat: 29.08, lng: -110.95 },
          zoom: 13
        }}
      />
    );
  }
}

export default GoogleLocationMap;
