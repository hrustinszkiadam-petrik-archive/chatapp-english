import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const SubmitButton = () => {
	const { isRegister } = useAuth();
	return (
		<button
			type='submit'
			className='block w-full rounded-sm bg-blue-500 p-2 text-white'
		>
			{isRegister ? 'Register' : 'Login'}
		</button>
	);
};

export default SubmitButton;
