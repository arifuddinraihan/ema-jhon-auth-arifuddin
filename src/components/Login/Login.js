import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
    // Auth-context user-login received here
    const { userSignIn } = useContext(AuthContext)
    // Navigate the user to shop page using navigate
    const navigate = useNavigate();

    const handleSubmit = event => {
        // stop reloading
        event.preventDefault()
        // get data from form-container
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        // check auth and give permission | User Login
        userSignIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
            navigate('/')
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;