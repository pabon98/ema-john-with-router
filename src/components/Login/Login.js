import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const{signinUsingGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.form || "/shop"
    // console.log('came from', location.state?.form)

    const handleGoogleLogin =()=>{
        signinUsingGoogle()
        .then(result=>{
            history.push(redirect_url)
        })
    }
    return (
        <div className="Login-form">
            <div>
                <h2>Login</h2>
                <form  action="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New To Amazone website? <Link to='/register'>Create account</Link></p>
                <div>
                    ------- or ------
                    <br /> <br />
                    <button onClick={handleGoogleLogin} 
                    className="btn-regular">Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;