import React from 'react';
import L from 'leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.width };
    height: ${props => props.height };
`;

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

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
        L.marker([65,25.5]).addTo(this.map);
    }

    render(){
        return <Wrapper width="1024px" height="576px" id="map" />
    }
}
