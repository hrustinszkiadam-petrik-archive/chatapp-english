/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
	content: ['./index.html', './src/**/*.jsx', './src/compontents/**/*.jsx'],
	theme: {
		extend: {
			screens: {
				xs: { max: '550px' },
			},
			spacing: {
				'0-5': '0.125rem',
				88: '22rem',
				104: '26rem',
				112: '28rem',
				120: '30rem',
			},
		},
	},
	plugins: [scrollbar({ nocompatible: true })],
};
