import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import logo from '../../images/logos/logo.png';



const Login = () => {
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
   
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    var provider = new firebase.auth.GoogleAuthProvider();
    const googleHandleClicked = ()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
           console.log(displayName,email);
           const signInUser = {name:displayName, email};
           setLoggedInUser(signInUser);
           history.replace(from);
           
            
        })
          .catch(error=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          })
       }
    return (
    <div className='container '>
        <div  className='logosetuup text-center mt-3 '>
        <img  src={logo} alt=""/>
        </div>

        <div className="card text-center mt-5 google-image " style={{width:'40%',margin:'auto'}}>

        <img onClick={googleHandleClicked} src='https://i.imgur.com/VUiCSkt.png' alt="Card image cap" width="60"/>

            <div class="card-body">

                <h6 class="card-title">Login With Google</h6>
        
            </div>
        </div>






        {/* <div className="icon-settings d-flex ">
             
            <img onClick={googleHandleClicked}  src="https://i.imgur.com/VUiCSkt.png"  alt=""/>
            <h4>Login With Google</h4>
        </div> */}
        </div>
    );
};

export default Login;