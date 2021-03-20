import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';


const CreateAccount = () => {

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSubmit = () => {

    }

    const handleSignInGoogle = () => {
        const gProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(gProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);         
        }).catch((error) => { 
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            console.log(email, errorCode, errorMessage);
    
        });
    }

    const handleSignInFacebook = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            const user = result.user;
            console.log("fb-user", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            console.log(errorCode, errorMessage, email );
        });
    }


    return (
        <div style={{textAlign:"center"}}>
            <h4>Creat an account</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required/>
                <br/>
                <input type="text" placeholder="Username or Email" required/>
                <br/>
                <input type="password" placeholder="Password" required/>
                <br/>
                <input type="password" placeholder="Confirm Password" required/>
                <br/>
                <input type="submit"  value="submit"/>
            </form>
            <p>Already have an account? <Link to='/login'> Login </Link> </p>
            <button onClick={handleSignInGoogle}>Continue with Google</button>
            <br/>
            <button onClick={handleSignInFacebook}>Continue with Facebook</button>
        </div>
    );
};

export default CreateAccount;