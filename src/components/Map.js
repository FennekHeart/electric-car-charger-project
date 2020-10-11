import React from 'react';
import L from 'leaflet';
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
        //Oulu
        L.marker([65.055363, 25.456706], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Rovaniemi
        L.marker([66.498664, 25.704456], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Kajaani
        L.marker([64.220400, 27.738443], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Kuusamo
        L.marker([65.956149, 29.160340], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Kokkola
        L.marker([63.830086, 23.147643], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Kuopio
        L.marker([62.896749, 27.682195], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Joensuu
        L.marker([62.600700, 29.775881], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Jyväskylä
        L.marker([62.243627, 25.755759], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Vaasa
        L.marker([63.098472, 21.619318], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Tampere
        L.marker([61.477822, 23.767594], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Pori
        L.marker([61.478007, 21.787210], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Tampere
        L.marker([61.477822, 23.767594], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Turku
        L.marker([60.453800, 22.253627], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Lahti
        L.marker([60.977311, 25.656931], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Kouvola
        L.marker([60.866513, 26.705088], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Lappeenranta
        L.marker([61.049776, 28.197684], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Kotka
        L.marker([60.461012, 26.938076], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Helsinki
        L.marker([60.171106, 24.943311], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Espoo
        L.marker([60.206013, 24.659662], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
        //Kemi
        L.marker([65.734932, 24.568858], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('Hello');
    }

    render(){
        return <Wrapper width="80%" height="720px" id="map" />
    }
}
