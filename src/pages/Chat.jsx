import React from 'react';

import Chats from '../components/Chat/Chats';
import CurrentMessage from '../components/Chat/CurrentMessage';

const Chat = () => {
	return (
		<div className='flex h-screen flex-grow divide-x divide-gray-400'>
			<Chats />
			<CurrentMessage />
		</div>
	);
};

export default Chat;
