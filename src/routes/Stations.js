import React, {useState, useEffect, Component} from 'react'
import styles from './Stations.module.css'
import { Link } from 'react-router-dom'

function Stations() {

    useEffect(() => {
        fetchStations();
    }, []);

    const [stations, setStations] = useState([]);

    const fetchStations = async () => {
        const data = await fetch(
            'http://localhost:4000/chargers'
        );

        const stations = await data.json();
        setStations(stations.chargers);
        
    };

    return (
        <div className={ styles.container }>
        {stations.map(station => (
            <>
            <div className={ styles.supercontainer }>
            <div className={ styles.station } >
                <div className={ styles.stationInfoBox}>
                    <div className={ styles.stationName } key={station.name}>{station.name}</div>
                    <div className={ styles.stationInfo }>
                        <div className={ styles.stationItem }>Slow chargestation status: {station.slowstatus}</div>
                        <div className={ styles.stationItem }>Fast chargestation status: {station.faststatus}</div>
                    </div>
                </div>
            </div>
            <Link className={ styles.stationButton } to={`/stations/${station.id}`}>
            <div >View</div>            
            </Link>
            </div>
            </>
        ))}
        </div>
    )
}

export default Stations;