import React from 'react';
import { useUser } from './contexts/UserContext';

import AuthProvider from './contexts/AuthContext';
import Auth from './pages/Auth';

import WSProvider from './contexts/WSContext';
import Chat from './pages/Chat';

function App() {
	const { user } = useUser();

	if (user)
		return (
			<WSProvider>
				<Chat />
			</WSProvider>
		);
	return (
		<AuthProvider>
			<Auth />
		</AuthProvider>
	);
}

export default App;
