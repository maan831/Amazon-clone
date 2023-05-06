import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate,  } from 'react-router-dom';
import { auth } from './firebase';
const Login = () => {
    const history = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e=>{
              e.preventDefault();
              auth.signInWithEmailAndPassword(email,password).then(auth=>{console.log(auth)
              if(auth){
                history('/');
              }
   
            }).catch(err=>alert(err.message));
    }
    const register = e =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{console.log(auth)
         if(auth){
            history('/');
         }
        }).catch((err)=>alert(err.message));
    }
  return (
    <div className='login'>
        <Link>
        <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo'/>
        </Link>
        <div className='login-container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e =>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='text'value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login-signin-button'>Sign-In</button>
                <p>By signing In you agree to the  Amazon Fake Clone conditions of Use & Sale. Please see our Privacy Notice , our Cookies Notice and our Internet-Based Ads </p>
                <button onClick={register} className='login-register-button'>Create Your Amazon Account</button>
                
            </form>
        </div>
    </div>
  )
}

export default Login