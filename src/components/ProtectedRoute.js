import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute(props) {

    let output = null;
    if(props.isUserLogged){
        output = <Route {...props} />
    } else {
        output = <Redirect to='/' />
    }


    return (
        <div>
            { output }
        </div>
    )
}
