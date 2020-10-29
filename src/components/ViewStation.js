import Axios from 'axios';
import React, { useState } from 'react'

export default function ViewStation(props) {

    const [state, setState] = useState({
        id : ""
    })


    const stationPath = window.location.pathname;
    const stationID = stationPath.substr(10)
    setState({id: stationID})

    
    const getStation = async () => {
        const payload = {
            "id":state.id
        }
        console.log(payload)
        await Axios.get('http://52.91.107.120/getstation', payload)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        }
    getStation();

    return (
        <div>
            <button onClick={getStation()}></button>
        </div>
    )
}
