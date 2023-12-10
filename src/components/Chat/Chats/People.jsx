import React, { useEffect, useState } from 'react';

import { useWS } from '../../../contexts/WSContext';
import { useUser } from '../../../contexts/UserContext';

import Person from './Person';

const People = () => {
	const { online, selected, setSelected, conversations } = useWS();
	const { user } = useUser();
	const [onlineIDs, setOnlineIDs] = useState([]);
	const [conversationIDS, setConversationIDS] = useState([]);

	useEffect(() => {
		setOnlineIDs(online.map((person) => person.userId));
		setConversationIDS(conversations.map((person) => person.id));
	}, [online, selected, conversations]);

	return (
		<div className='sm:scrollbar-custom mt-2 flex-grow flex-col overflow-y-auto'>
			<h3 className='ml-2 font-bold'>Your Conversations</h3>
			{conversations.map((conversation) => {
				return (
					<Person
						key={conversation.id}
						username={conversation.username}
						userId={conversation.id}
						onClick={() =>
							setSelected({
								userId: conversation.id,
								username: conversation.username,
							})
						}
						selected={selected?.userId === conversation.id}
						isOnline={onlineIDs.includes(conversation.id)}
					/>
				);
			})}
			<h3 className='ml-2 mt-10 font-bold'>Discover People</h3>
			{online
				.filter(
					(person) =>
						!conversationIDS.includes(person.userId) &&
						person.userId !== user.userId,
				)
				.map((person) => {
					return (
						<Person
							key={person.userId}
							username={person.username}
							userId={person.userId}
							onClick={() =>
								setSelected({
									userId: person.userId,
									username: person.username,
								})
							}
							selected={selected?.userId === person.userId}
							isOnline={true}
						/>
					);
				})}
		</div>
	);
};

export default People;
