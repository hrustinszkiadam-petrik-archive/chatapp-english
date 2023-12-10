import React from 'react';
import { useAuth } from '../contexts/AuthContext';

import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';

const Auth = () => {
	const { isRegister } = useAuth();
	return (
		<div className='flex h-screen items-center bg-blue-50'>
			{isRegister ? <Register /> : <Login />}
		</div>
	);
};

export default Auth;
