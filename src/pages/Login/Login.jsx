import React from 'react';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <button onClick={handleSocialLogin} className='btn btn-primary'>Google</button>
        </div>
    );
};

export default Login;