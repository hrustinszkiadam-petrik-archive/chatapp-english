import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const [isRegister, setIsRegister] = useState(false);

	return (
		<AuthContext.Provider value={{ isRegister, setIsRegister }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
