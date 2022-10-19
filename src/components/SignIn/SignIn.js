import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {

    // error state for showing requirements miss match
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        // preventing reloading
        event.preventDefault();
        // getting value from form
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm =  form.password.value;
        // condition for password matching and showing error
        if ( password.length < 6){
            setError("Your password is less than 6 character")
        }
        if ( password !== confirm){
            setError("Your password did not match")
        }
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                    <p className='text-error'>{error}</p>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignIn;