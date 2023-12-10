import React, { useState, useEffect, useContext, createContext } from 'react';

const WSContext = createContext();

export const useWS = () => useContext(WSContext);

const WSProvider = ({ children }) => {
	const [ws, setWs] = useState(null);
	const [conversations, setConversations] = useState([]);
	const [online, setOnline] = useState([]);
	const [selected, setSelected] = useState(null);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const _ws = new WebSocket('wss://chatapp-english-api.onrender.com');
		setWs(_ws);
		_ws.addEventListener('message', handleMessage);
	}, []);

	useEffect(() => {
		getMessages();
	}, [selected]);

	useEffect(() => {
		getConversations();
	}, [messages]);

	const handleMessage = (e) => {
		const messageData = JSON.parse(e.data);
		if ('online' in messageData) {
			onlinePeople(messageData.online);
		} else if ('messageId' in messageData) {
			setMessages((prev) => [...prev, messageData]);
		} else if ('messages' in messageData) {
			setMessages(messageData.messages);
		} else if ('conversations') {
			setConversations(messageData.conversations);
		}
	};

	const getMessages = () => {
		if (selected) {
			ws?.send(JSON.stringify({ recipientId: selected.userId }));
		}
	};

	const getConversations = () => {
		ws?.send(JSON.stringify({ conversations: true }));
	};

	const sendMessage = (message) => {
		ws?.send(
			JSON.stringify({
				recipientId: selected.userId,
				message,
			}),
		);
	};

	const onlinePeople = (people) => {
		for (let i = 0; i < people.length; i++) {
			for (let j = i + 1; j < people.length; j++) {
				if (people[i].userId === people[j].userId) {
					people.splice(j, 1);
				}
			}
		}

		setOnline(people);
	};

	return (
		<WSContext.Provider
			value={{
				conversations,
				online,
				selected,
				messages,
				setSelected,
				sendMessage,
			}}
		>
			{children}
		</WSContext.Provider>
	);
};

export default WSProvider;
