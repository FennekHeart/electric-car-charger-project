import React from 'react'
import '../App.css';
import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div className={ styles.container }>
            <div className={ styles.formContainer }>
                <h1>LOG IN:</h1>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Username:</label><br></br>
                    <input type="text"
                    className={ styles.inputBox }
                    id="username"
                    placeholder="Username"/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Password:</label><br></br>
                    <input type="password"
                    className={ styles.inputBox }
                    id="password"
                    placeholder="Password"/>
                </div>
                <button type="submit" className={ styles.signButton }>Log In</button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default SignIn;