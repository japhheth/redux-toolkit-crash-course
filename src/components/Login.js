import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user/user'

const Login = () => {
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(login({ name: 'John', age: 40, email: 'john@gmail.com' }))
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div>
            <button onClick={loginHandler}>Login</button>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Login
