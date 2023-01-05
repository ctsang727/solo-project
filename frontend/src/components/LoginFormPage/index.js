import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const demoSubmit = (e) => {
        e.preventDefault();
        console.log('test')
        const credential = 'demo@user.io'
        const password = 'password'
        return dispatch(sessionActions.login({ credential, password }));
    }

    return (
        <div className='large-container-login'>
            <div className='form-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <input
                        placeholder='Email'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                    <input
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className='buttons-login'>
                        <div>
                            <button type="submit">Log In</button>
                            <button type='submit' onClick={demoSubmit}>Demo</button>
                        </div>

                    </div>
                    <div className='signup-link'>
                        <p>Don't have an account? <NavLink exact to="/signup">Sign up here!</NavLink></p>
                    </div>
                </form>

            </div>
            <div className='container2'>
                <img alt='default' src='https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png'></img>
            </div>
        </div>
    );
}

export default LoginFormPage;