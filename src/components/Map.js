import React from 'react';
import L, { marker } from 'leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import icon from '../mapIcon.png'
//import icon from 'leaflet/dist/images/marker-icon.png';
//import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.width };
    height: ${props => props.height };
`;

var mapIcon = L.icon({
    iconUrl: icon,
    iconSize: [50, 60],
    iconAnchor: [25, 60],
    popupAnchor: [0, -60]

})
/*let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;*/

export default class Map extends React.Component {

    componentDidMount(){
        this.map = L.map('map', {
            center: [65, 25.5],
            zoom: 10,
            zoomControl: false
        });

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);
        L.marker([65.055363, 25.456706], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
    }

    render(){
        return <Wrapper width="80%" height="720px" id="map" />
    }
}
