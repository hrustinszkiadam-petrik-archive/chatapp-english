import React from 'react';
import { useUser } from '../../contexts/UserContext';

import ChatsHeader from './Chats/ChatsHeader';
import People from './Chats/People';
import LogoutButton from '../Auth/LogoutButton';

const Chats = () => {
	const { user } = useUser();
	return (
		<div className='flex w-104 flex-col xs:w-20'>
			<ChatsHeader />
			<People />
			<div className='sticky bottom-0 flex flex-col items-center justify-center px-4 py-4'>
				<div className='flex-row xs:hidden'>
					<h3 className='inline-block'>Logged In as:</h3>
					<span className='ml-2 inline-block font-semibold'>
						<span className='mr-1'>{user.username}</span>
						<span>(</span>
						<span>{user.email}</span>
						<span>)</span>
					</span>
				</div>
				<LogoutButton />
			</div>
		</div>
	);
};

export default Chats;
