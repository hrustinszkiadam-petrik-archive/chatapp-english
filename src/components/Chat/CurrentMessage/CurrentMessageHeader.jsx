import React from 'react';
import { useWS } from '../../../contexts/WSContext';
import Avatar from '../Chats/Avatar';

const CurrentMessageHeader = () => {
	const { selected } = useWS();
	return (
		<div>
			<div className='flex items-center justify-center gap-4 bg-white px-4 pb-4 pt-5 text-2xl'>
				<Avatar
					userId={selected.userId}
					username={selected.username}
				/>
				<h1 className={`font-bold `}>{selected.username}</h1>
			</div>
			<hr />
		</div>
	);
};

export default CurrentMessageHeader;
