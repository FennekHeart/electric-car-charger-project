import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={ styles.headerBackground }>
            <div className={ styles.container }>
                <div className={ styles.leftHeader}>
                    <Link className={ styles.brand } to="/">
                    <div >CAR CHARGE</div>
                    </Link>
                    <Link className={ styles.headerItem} to="/stations">
                    <div >Charging stations</div>
                    </Link>
                    <Link className={ styles.headerItem} to="/about">
                    <div >About</div>
                    </Link>
                </div>
                <div className={ styles.rightHeader}>
                    <Link to="/signin">
                    <button className={ styles.loginButton }>Login</button>
                    </Link>
                    <Link to="/signup">
                    <button className={ styles.signButton }>SIGN UP</button>                 
                    </Link>
                </div>
            </div>
        </div>
    )
}
