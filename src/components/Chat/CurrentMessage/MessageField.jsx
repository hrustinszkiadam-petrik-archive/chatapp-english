import React, { useState, useRef, useEffect } from 'react';
import { useWS } from '../../../contexts/WSContext';

const MessageField = () => {
	const { sendMessage } = useWS();
	const [message, setMessage] = useState('');
	const [timeoutState, setTimeoutState] = useState(null);
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (message === '' || timeoutState) return;
		sendMessage(message);
		setTimeoutState(0.5);
		setMessage('');
		inputRef.current.focus();
	};

	useEffect(() => {
		if (timeoutState === null) return;
		setTimeout(() => {
			setTimeoutState(null);
			inputRef.current.focus();
		}, timeoutState * 1000);
		return () => {
			clearTimeout(timeoutState);
		};
	}, [timeoutState]);

	return (
		<form
			className='sticky bottom-0 flex gap-2 bg-white px-4 py-4'
			onSubmit={handleSubmit}
		>
			<input
				ref={inputRef}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				type='text'
				placeholder='Aa'
				className='focus:shadow-outline flex-grow rounded-2xl bg-blue-100 px-4 py-2 focus:outline-none'
			/>
			<button
				type='submit'
				className='rounded-full px-4 py-2 text-blue-500 hover:bg-blue-50'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 22 22'
					fill='currentColor'
					className='h-7 w-7'
				>
					<path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
				</svg>
			</button>
		</form>
	);
};

export default MessageField;
