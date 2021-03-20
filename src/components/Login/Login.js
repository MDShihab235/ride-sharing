import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';


const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {from} = location.state || { from :{ pathname: "/"}};


    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:''
    });


    const handleSignInGoogle = () => {
        const gProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(gProvider)
        .then((result) => {
            
            const {displayName, email} = result.user;
            const signedInUser = { name: displayName, email: email};
            setLoggedInUser(signedInUser);
            history.replace(from);       
        })
        .catch((error) => { 
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            console.log(email, errorCode, errorMessage);
        });
    }

    const handleSignInFacebook = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = { name: displayName, email: email};
            setLoggedInUser(signedInUser);
            history.replace(from); 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            console.log(errorCode, errorMessage, email );
        });
    }

    const signInUser = event => {
        if(user.isValid){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            console.log(res);
            const createdUser = {...user};
            createdUser.isSignedIn = true;
            createdUser.error = '';
            setUser(createdUser);
          })
          .catch(err => {
            console.log(err.message);
            const createdUser = {...user};
            createdUser.isSignedIn = false;
            createdUser.error = err.message;
            setUser(createdUser);
          })
        }
        event.preventDefault();
        event.target.reset();
    }


    return (
        <div style={{textAlign:"center"}}>
            <h4>Login</h4>
            <form onSubmit={signInUser}>
                
                <input type="text" name="email" placeholder=" Email" required/>
                <br/>
                <input type="password" name="password" placeholder="Password" required/>
                <br/>
                <input type="submit"  value="submit"/>
            </form>
            <p>Don't have an account? <Link to='/create-account'> Create an account </Link></p>
            <button onClick={handleSignInGoogle}>Continue with Google</button>
            <br/>
            <button onClick={handleSignInFacebook}>Continue with Facebook</button>
        </div>
    );
};

export default Login;