import React, {useState} from 'react';
import '../App.css';
import styles from './SignUp.module.css'
import AlertComponent from '../components/AlertComponent';
import SignUpForm from '../components/SignUpForm';


function Signup() {

    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);

    return (
        <>
        <div className={ styles.container }>
            <div className={ styles.formContainer }>
                <SignUpForm showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
                <AlertComponent errorMessage = { errorMessage } hideError = { updateErrorMessage } 
                successMessage = { successMessage } hideSuccess = {updateSuccessMessage} />
            </div>
        </div>
        </>
    );
}

export default Signup;