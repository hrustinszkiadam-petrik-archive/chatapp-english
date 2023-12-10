import React from 'react';
import Avatar from './Avatar';

const Person = ({ username, userId, onClick, selected, isOnline }) => {
	return (
		<div
			className={`flex h-14 cursor-pointer flex-row items-center justify-center gap-2 border-b border-gray-100 py-2 text-xl hover:bg-blue-50 ${
				selected ? 'bg-blue-50' : ''
			}`}
			onClick={onClick}
		>
			{selected ? (
				<div className='absolute left-0 h-8 w-1 rounded-r-full bg-blue-500'></div>
			) : null}
			<div className='ml-6 w-10 xs:m-0'>
				<Avatar
					userId={userId}
					username={username}
				/>
			</div>
			<div
				className={`w-full xs:hidden ${
					isOnline ? 'text-green-600' : 'text-gray-800'
				}`}
			>
				{username}
			</div>
		</div>
	);
};

export default Person;
