import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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






// import { useState, useMemo, useCallback, useRef } from "react";
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   Circle,
//   MarkerClusterer,
// } from "@react-google-maps/api";
// import Places from "./places";
// import Distance from "./distance";

// type LatLngLiteral = google.maps.LatLngLiteral;
// type DirectionsResult = google.maps.DirectionsResult;
// type MapOptions = google.maps.MapOptions;

// export default function Map() {
//   const [office, setOffice] = useState<LatLngLiteral>();
//   const [directions, setDirections] = useState<DirectionsResult>();
//   const mapRef = useRef<GoogleMap>();
//   const center = useMemo<LatLngLiteral>(
//     () => ({ lat: 43.45, lng: -80.49 }),
//     []
//   );
//   const options = useMemo<MapOptions>(
//     () => ({
//       mapId: "b181cac70f27f5e6",
//       disableDefaultUI: true,
//       clickableIcons: false,
//     }),
//     []
//   );
//   const onLoad = useCallback((map) => (mapRef.current = map), []);
//   const houses = useMemo(() => generateHouses(center), [center]);

//   const fetchDirections = (house: LatLngLiteral) => {
//     if (!office) return;

//     const service = new google.maps.DirectionsService();
//     service.route(
//       {
//         origin: house,
//         destination: office,
//         travelMode: google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result) {
//           setDirections(result);
//         }
//       }
//     );
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <h1>Commute?</h1>
//         <Places
//           setOffice={(position) => {
//             setOffice(position);
//             mapRef.current?.panTo(position);
//           }}
//         />
//         {!office && <p>Enter the address of your office.</p>}
//         {directions && <Distance leg={directions.routes[0].legs[0]} />}
//       </div>
//       <div className="map">
//         <GoogleMap
//           zoom={10}
//           center={center}
//           mapContainerClassName="map-container"
//           options={options}
//           onLoad={onLoad}
//         >
//           {directions && (
//             <DirectionsRenderer
//               directions={directions}
//               options={{
//                 polylineOptions: {
//                   zIndex: 50,
//                   strokeColor: "#1976D2",
//                   strokeWeight: 5,
//                 },
//               }}
//             />
//           )}

//           {office && (
//             <>
//               <Marker
//                 position={office}
//                 icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
//               />

//               <MarkerClusterer>
//                 {(clusterer) =>
//                   houses.map((house) => (
//                     <Marker
//                       key={house.lat}
//                       position={house}
//                       clusterer={clusterer}
//                       onClick={() => {
//                         fetchDirections(house);
//                       }}
//                     />
//                   ))
//                 }
//               </MarkerClusterer>

//               <Circle center={office} radius={15000} options={closeOptions} />
//               <Circle center={office} radius={30000} options={middleOptions} />
//               <Circle center={office} radius={45000} options={farOptions} />
//             </>
//           )}
//         </GoogleMap>
//       </div>
//     </div>
//   );
// }

// const defaultOptions = {
//   strokeOpacity: 0.5,
//   strokeWeight: 2,
//   clickable: false,
//   draggable: false,
//   editable: false,
//   visible: true,
// };
// const closeOptions = {
//   ...defaultOptions,
//   zIndex: 3,
//   fillOpacity: 0.05,
//   strokeColor: "#8BC34A",
//   fillColor: "#8BC34A",
// };
// const middleOptions = {
//   ...defaultOptions,
//   zIndex: 2,
//   fillOpacity: 0.05,
//   strokeColor: "#FBC02D",
//   fillColor: "#FBC02D",
// };
// const farOptions = {
//   ...defaultOptions,
//   zIndex: 1,
//   fillOpacity: 0.05,
//   strokeColor: "#FF5252",
//   fillColor: "#FF5252",
// };

// const generateHouses = (position: LatLngLiteral) => {
//   const _houses: Array<LatLngLiteral> = [];
//   for (let i = 0; i < 100; i++) {
//     const direction = Math.random() < 0.5 ? -2 : 2;
//     _houses.push({
//       lat: position.lat + Math.random() / direction,
//       lng: position.lng + Math.random() / direction,
//     });
//   }
//   return _houses;
// };










// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import './map.css'
// import { useRef, useState, useEffect } from 'react';

// const location = {
//     address: '288 9th Ave, Oakland, CA 94606',
//     lat: 37.78736758623886,
//     lng: -122.25611901349245
//   } 

// const APIkey = 'AIzaSyCL-GMYc7sDax4cZv33Z67-Zv-nUZgd7A0'

// const render = (status: Status) => {
//   return <h1>{status}</h1>;
// };

// <Wrapper apiKey={"AIzaSyCL-GMYc7sDax4cZv33Z67-Zv-nUZgd7A0"} render={render}>
 
// </Wrapper>

// // const Map: React.FC<{}> = () => {};

// const ref = React.useRef(null);
// const [map, setMap] = React.useState();

// React.useEffect(() => {
//   if (ref.current && !map) {
//     setMap(new window.google.maps.Map(ref.current, {}));
//   }
// }, [ref, map]);

// return <div ref={ref} />