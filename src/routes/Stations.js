import React from 'react'
import styles from './Stations.module.css'



var stations = [
    {
        "name" : "Oulu",
        "slowcharge" : "Free",
        "fastcharge" : "Free"
    },
    {
        "name" : "Rovaniemi",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Kajaani",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Kuusamo",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Kokkola",
        "slowcharge" : "Taken",
        "fastcharge" : "Taken"
    },
    {
        "name" : "Kuopio",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Joensuu",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Jyväskylä",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Vaasa",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Tampere",
        "slowcharge" : "Taken",
        "fastcharge" : "Taken"
    },
    {
        "name" : "Pori",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Turku",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Lahti",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Kouvola",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Lappeenranta",
        "slowcharge" : "Free",
        "fastcharge" : "Taken"
    },
    {
        "name" : "Kotka",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Helsinki",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Espoo",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Kemi",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    },
    {
        "name" : "Kemijärvi",
        "slowcharge" : "Taken",
        "fastcharge" : "Free"
    }
]

const Test = ({stations}) => (
        <div className={ styles.container }>
        {stations.map(station => (
            <>
            <div className={ styles.supercontainer }>
            <div className={ styles.station } >
                <div className={ styles.stationInfoBox}>
                    <div className={ styles.stationName } key={station.name}>{station.name}</div>
                    <div className={ styles.stationInfo }>
                        <div className={ styles.stationItem }>Slow chargestation status: {station.slowcharge}</div>
                        <div className={ styles.stationItem }>Fast chargestation status: {station.fastcharge}</div>
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
