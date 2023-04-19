import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const { createUser} = useContext(AuthContext);



    const handleSignUp = (event) => {
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('');
        setSuccess('');

        if (password !== confirm) {
            setError('Your password not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('Successfully login');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })



        setSuccess('Successfully login');
        form.reset();


    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='email' placeholder='email' required />

                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' id='password' placeholder='password' required />

                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' id='confirm' placeholder='Confirm Password' required />

                </div>

                <input className='btn-submit' type="submit" value="SignUp" />
                <p><small>Already have an account? <Link to="/login">Login</Link></small></p>

                <p className='text-error'>{error}</p>
                <p className='text-success'>{success}</p>

            </form>


        </div>
    );
};

export default SignUp;