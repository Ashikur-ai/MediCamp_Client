import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { googleSignIn } = useAuth();
    const handleSocialLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>MediCamp | Login</title>
            </Helmet>
            <button onClick={handleSocialLogin} className='btn btn-primary'>Google</button>
        </div>
    );
};

export default Login;