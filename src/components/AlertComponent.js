import React, { useState, useEffect } from 'react';
import styles from '../routes/SignUp.module.css'


function AlertComponent(props) {
    
    
    return(
        <div 
            role="alert" 
            id="alertPopUp"
        >
            <div className={ styles.error }>
                <span className={ styles.error } >{ props.errorMessage }</span>
                <alert className={ styles.success } >{ props.successMessage }</alert>
            </div>
            
        </div>
    )
} 

export default AlertComponent