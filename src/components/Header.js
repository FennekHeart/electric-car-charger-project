import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={ styles.headerBackground }>
            <div className={ styles.container }>
                <div className={ styles.leftHeader}>
                    <a className={ styles.brand }>CAR CHARGE</a>
                    <a className={ styles.headerItem}>Charging stations</a>
                    <a className={ styles.headerItem}>Information</a>
                </div>
                <div className={ styles.rightHeader}>
                    <button className={ styles.loginButton }>Sign in</button>
                    <button className={ styles.signButton }>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}
