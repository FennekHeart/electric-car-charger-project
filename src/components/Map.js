import React from 'react';
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

        
        //Oulu
        L.marker([65.055363, 25.456706], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('OULU Charge station<br>Fast charge status:<br>Slow charge status:');
        //Rovaniemi
        L.marker([66.498664, 25.704456], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('ROVANIEMI Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kajaani
        L.marker([64.220400, 27.738443], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KAJAANI Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kuusamo
        L.marker([65.956149, 29.160340], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KUUSAMO Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kokkola
        L.marker([63.830086, 23.147643], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KOKKOLA Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kuopio
        L.marker([62.896749, 27.682195], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KUOPIO Charge station<br>Fast charge status:<br>Slow charge status:');
        //Joensuu
        L.marker([62.600700, 29.775881], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('JOENSUU Charge station<br>Fast charge status:<br>Slow charge status:');
        //Jyväskylä
        L.marker([62.243627, 25.755759], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('JYVÄSKYLÄ Charge station<br>Fast charge status:<br>Slow charge status:');
        //Vaasa
        L.marker([63.098472, 21.619318], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('VAASA Charge station<br>Fast charge status:<br>Slow charge status:');
        //Tampere
        L.marker([61.477822, 23.767594], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('TAMPERE Charge station<br>Fast charge status:<br>Slow charge status:');
        //Pori
        L.marker([61.478007, 21.787210], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('PORI Charge station<br>Fast charge status:<br>Slow charge status:');
        //Turku
        L.marker([60.453800, 22.253627], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('TURKU Charge station<br>Fast charge status:<br>Slow charge status:');
        //Lahti
        L.marker([60.977311, 25.656931], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('LAHTI Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kouvola
        L.marker([60.866513, 26.705088], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KOUVOLA Charge station<br>Fast charge status:<br>Slow charge status:');
        //Lappeenranta
        L.marker([61.049776, 28.197684], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('LAPPEENRANTA Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kotka
        L.marker([60.461012, 26.938076], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KOTKA Charge station<br>Fast charge status:<br>Slow charge status:');
        //Helsinki
        L.marker([60.171106, 24.943311], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('HELSINKI Charge station<br>Fast charge status:<br>Slow charge status:');
        //Espoo
        L.marker([60.206013, 24.659662], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('ESPOO Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kemi
        L.marker([65.734932, 24.568858], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KEMI Charge station<br>Fast charge status:<br>Slow charge status:');
        //Kemijärvi
        L.marker([66.717135, 27.427773], {icon: mapIcon}).addTo(this.map)
                            .bindPopup('KEMIJÄRVI Charge station<br>Fast charge status:<br>Slow charge status:');
        
    }

    render(){

        
        return <Wrapper width="80%" height="720px" id="map" />



    }
}
