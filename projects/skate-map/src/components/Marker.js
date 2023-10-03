import React, { Component } from 'React'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-React';
import skategroups from '../Data.js'

export class MapComponent extends Component {

    render() {

        return (<div className="map-area">

            <Map

                google={this.props.google}

                zoom={14}

                center={{

                    lat: 47.444,

                    lng: -122.176

                }}>

                <Marker key="marker_1"

                    position={{

                        lat: skategroups[0][3],

                        lng: skategroups[0][4]

                    }}

                />

            </Map>

        </div>);

    }

}

export default GoogleApiWrapper({

    apiKey: ("AIzaSyCL-GMYc7sDax4cZv33Z67-Zv-nUZgd7A0")

})(MapComponent);