import React from 'react'
import styles from './Stations.module.css'
import chargerData from '../charger-data.json'



var stations = [];
stations.push(chargerData.chargers)
console.log(stations)

const Test = ({stations}) => (
    
        <div className={ styles.container }>
        {stations[0].map(station => (
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
            <div className={ styles.stationButton }>Reserve</div>
            </div>
            </>
        ))}
        </div>

  );
  
  

export default function Stations() {
    return (
        <div>
        <Test stations={stations} />
        </div>
    )
}
