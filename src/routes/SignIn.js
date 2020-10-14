import React,{ useState } from 'react'
import '../App.css';
import styles from './SignIn.module.css'
import AlertComponent from '../components/AlertComponent';
import SignInFrom from '../components/SignInFrom';



function SignIn(props) {

    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);

    return (
        <div className={ styles.container }>
            <div className={ styles.formContainer }>
                <SignInFrom showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
                <AlertComponent errorMessage = { errorMessage } hideError = { updateErrorMessage } 
                    successMessage = { successMessage } hideSuccess = {updateSuccessMessage} />
            </div>
        </div>
    )
}

export default SignIn;