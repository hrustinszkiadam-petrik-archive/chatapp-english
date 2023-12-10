import React from 'react';
import { useWS } from '../../contexts/WSContext';

import MessageField from './CurrentMessage/MessageField';
import Messages from './CurrentMessage/Messages';
import CurrentMessageHeader from './CurrentMessage/CurrentMessageHeader';

const CurrentMessage = () => {
	const { selected } = useWS();

	return (
		<div className='flex h-full w-full flex-col'>
			{!!selected ? (
				<>
					<CurrentMessageHeader />

					<Messages />
					<MessageField />
				</>
			) : (
				<div className='flex flex-grow items-center justify-center text-gray-400'>
					Select a person to chat with
				</div>
			)}
		</div>
	);
};

export default CurrentMessage;
