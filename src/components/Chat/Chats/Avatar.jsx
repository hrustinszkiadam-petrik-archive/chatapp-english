import React from 'react';

const Avatar = ({ userId, username }) => {
	const colors = [
		'bg-red-200',
		'bg-green-200',
		'bg-purple-200',
		'bg-yellow-200',
		'bg-blue-200',
		'bg-pink-200',
		'bg-teal-200',
	];

	const color = colors[userId % colors.length];

	return (
		<div
			className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}
		>
			<div className='opcaity-70 text-center'>
				{username[0].toUpperCase()}
			</div>
		</div>
	);
};

export default Avatar;
