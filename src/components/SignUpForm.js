import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import styles from '../routes/SignUp.module.css'

function SignUpForm(props) {

    const [state, setState] = useState({
        username : "",
        password : "",
        confirmPassword : ""
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }


    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
            props.showSuccess(null);
        }
    }

    const sendDetailsToServer = () => {
        if(state.username.length && state.password.length) {
            props.showError(null);
            props.showSuccess(null);
            const payload={
                "username":state.username,
                "password":state.password,
            }
            Axios.post('http://localhost:8080/user/register', payload)
                .then(function (response) {
                    if(response.status === 200){
                            setState(prevState => ({
                                ...prevState,
                                'successMessage' : 'Registration successful. Redirecting to home page..'
                            }))
                            props.showError(null)
                            props.showSuccess("Registration Successful!")
                    } 
                    if(response.data === "Username Taken"){
                        props.showError("Username already in use")
                        props.showSuccess(null)
                    }
                    else{
                        props.showError("Some error ocurred");
                        props.showSuccess(null);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    props.showSuccess(null);
                });    
        } else {
            props.showError('Please enter valid username and password')
            props.showSuccess(null);    
            
        }

    }



    return (
        <div>

                <h1>SIGN UP:</h1>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Username:</label><br></br>
                    <input type="text"
                    className={ styles.inputBox }
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Password:</label><br></br>
                    <input type="password"
                    className={ styles.inputBox }
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Confirm Password:</label><br></br>
                    <input type="password"
                    className={ styles.inputBox }
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}/>
                </div>
                <button 
                type="submit" 
                className={ styles.signButton }
                onClick={handleSubmitClick}>
                    Register
                </button>
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            
        </div>
    )
}

export default SignUpForm;