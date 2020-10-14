import React, {useState} from 'react'
import styles from '../routes/SignIn.module.css'
import { Link, Redirect } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Axios from 'axios';
import AlertComponent from '../components/AlertComponent';



export default function SignInFrom(props) {



    const [ isUserLogged, setIsUserLogged ] = useState(false);
    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);
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

    function processLoginClick(history){
        console.log('click')

        Axios.post('http://localhost:8080/user/login',
                    {},
                     { auth: {
                         username: state.username,
                         password: state.password
                     }
                    })
                    .then(response => {
                        console.log('Login Successful');
                        setIsUserLogged(true);
                        props.showError(null)
                        props.showSuccess("Account found and authorized.")

                    })
                    .catch(error => console.log(error));
                    props.showError("Something went wrong. Please check username and password.")
                    props.showSuccess(null)
    }
    return (
        <div>

                <h1>LOG IN:</h1>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Username:</label><br></br>
                    <input type="text"
                    className={ styles.inputBox }
                    id="username"
                    placeholder="Username"
                    onChange={ handleChange }/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Password:</label><br></br>
                    <input type="password"
                    className={ styles.inputBox }
                    id="password"
                    placeholder="Password"
                    onChange={ handleChange }/>
                </div>
                <button type="submit" className={ styles.signButton } onClick={ processLoginClick }>Log In</button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}
