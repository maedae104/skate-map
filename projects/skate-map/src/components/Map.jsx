import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import skategroups from '../Data.js'

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 37.787083905601605,
  lng: -122.2569401834062
};




const testLocation = {
  
  lat : 37.787083905601605,
  lng : -122.2569401834062
}



// const createMarker = ({ map, maps }) => {
//   const markers = props.listingPins.map(data => {
//     return new maps.Marker({ position: data });
//   });

function SampleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCL-GMYc7sDax4cZv33Z67-Zv-nUZgd7A0"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds(testLocation);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(SampleMap)




