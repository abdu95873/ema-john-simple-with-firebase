import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [show, setShow] =useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const  from = location.state?.from?.pathname || '/'; 
    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form .password.value;
        console.log(email, password);

        setError('');
        setSuccess('');


        signIn (email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess('Successfully login');
            navigate(from, {replace: true});
            
        })
        .catch(error =>{
            console.log(error)
            setError(error.message);
        })

    }

        

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn} >
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='email' placeholder='email' required />

                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type={show?"text" : "password"} name='password' id='password' placeholder='password' required />
                    <p onClick={() => setShow(!show)}><small>
                        { 
                        show ? <span>Hide password</span>: <span>Show password</span>
                        
                    }
                        </small></p>

                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>Create new account. <Link to='/signup'>SignUp</Link></small></p>

                <p className='text-error'>{error}</p>
                <p className='text-success'>{success}</p>
            </form>
            

        </div>
    );
};

export default Login;