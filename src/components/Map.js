import React from 'react'
import L from 'leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import icon from './mapIcon.png'

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



export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stations: [] }
    }
    
    componentDidMount(){        

        this.map = L.map('map', {
            center: [63.7, 26.4],
            zoom: 6,
            zoomControl: false
        });

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);

        const fetchStations = async () => {
            const data = await fetch(
                'http://localhost:8080/chargers'
            )

            const stationData = await data.json();
            this.setState({stations: stationData.chargers});

            this.state.stations.map(station => (
                L.marker([station.lat, station.lng], {icon: mapIcon}).addTo(this.map)
                                .bindPopup(station.name + ' Charge station<br>Fast charge status: ' + station.faststatus + '<br>Slow charge status: ' + station.slowstatus)
            ))
        };
        fetchStations();

    }
    render(){

        
        return <Wrapper width="80%" height="100vh" id="map" />

    };

}
