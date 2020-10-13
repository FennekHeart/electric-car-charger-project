import React from 'react';
import '../App.css';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom'

function Signup() {







    return (
        <div className={ styles.container }>
            <div className={ styles.formContainer }>
                <h1>SIGN UP:</h1>
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
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Confirm Password:</label><br></br>
                    <input type="password"
                    className={ styles.inputBox }
                    id="confirmPassword"
                    placeholder="Confirm Password"/>
                </div>
                <button type="submit" className={ styles.signButton }>Register</button>
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        </div>
    );
}

export default Signup;