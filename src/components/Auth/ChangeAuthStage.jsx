import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const ChangeAuthStage = () => {
	const { isRegister, setIsRegister } = useAuth();
	return (
		<div
			className='mt-2 text-center hover:cursor-pointer hover:underline'
			onClick={() => setIsRegister((prev) => !prev)}
		>
			{isRegister
				? 'Already have an account? Log in'
				: "Don't have an account? Register"}
		</div>
	);
};

export default ChangeAuthStage;
