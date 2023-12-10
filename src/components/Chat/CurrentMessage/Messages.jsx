import React, { useEffect, useRef } from 'react';
import { useWS } from '../../../contexts/WSContext';

import Message from './Message';

const Messages = () => {
	const { messages, selected } = useWS();
	const scrollRef = useRef();

	useEffect(() => {
		scrollRef.current?.scrollIntoView({
			behavior: 'instant',
			block: 'end',
		});
	}, [selected, messages]);

	return (
		<div className='scrollbar-custom h-full overflow-auto'>
			<div className='flex flex-grow flex-col px-4 lg:text-xl'>
				{messages.map((message, i) =>
					message.senderId === selected.userId ||
					message.recipientId === selected.userId ? (
						<Message
							key={i}
							isMine={message.isMine}
							message={message.message}
						/>
					) : null,
				)}
			</div>
			<div ref={scrollRef}></div>
		</div>
	);
};

export default Messages;
