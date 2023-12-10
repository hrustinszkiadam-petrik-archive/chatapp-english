import React from 'react';

const Message = ({ message, isMine }) => {
	return (
		<div
			className={`my-0-5 flex gap-1 ${
				isMine ? 'justify-end' : 'justify-start'
			}`}
		>
			<div
				className={`${
					isMine
						? 'rounded-br-none bg-blue-500 text-white'
						: 'rounded-bl-none bg-gray-300 text-gray-600'
				} mx-4 max-w-xs break-words rounded-full px-4 py-2`}
			>
				{message}
			</div>
		</div>
	);
};

export default Message;
