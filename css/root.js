
export const colors = {
	// Core brand tones
	primary: {
		900: '#062E1A', // very dark green
		800: '#0A3F25',
		700: '#0F5A37',
		600: '#147748',
		500: '#199D61', // base green
		400: '#3EBB7B',
		300: '#6FD09E',
		200: '#9EE9C4',
		100: '#DFF7EC'
	},
	secondary: {
		900: '#07182B', // very dark blue
		800: '#08243F',
		700: '#0B3B5F',
		600: '#0F5182',
		500: '#1769A8', // base blue
		400: '#3B86C6',
		300: '#6EAEE0',
		200: '#A9D6F4',
		100: '#EAF6FF'
	},

	// Neutral/grays tuned for dark UI
	neutral: {
		900: '#010409',
		800: '#0B1115',
		700: '#131A1F',
		600: '#1F262B',
		500: '#2A3338',
		400: '#3E474C',
		300: '#6B7377',
		200: '#9AA0A3',
		100: '#CDD2D4'
	},

	// Semantic tokens for UI elements
		ui: {
			background: '#071118',
			surface: '#0B1618',
			textPrimary: '#E6F7EE',
			textSecondary: '#BFD7CE',
			muted: '#7F8B86'
		},

	// Button presets
	button: {
		primary: {
			bg: '#147748', // primary 600
			bgHover: '#0F5A37', // primary 700
			text: '#EAF7F1',
			border: '#199D61' // primary 500
		},
		secondary: {
			bg: '#0F5182', // secondary 600
			bgHover: '#0B3B5F', // secondary 700
			text: '#EAF6FF',
			border: '#1769A8' // secondary 500
		},
		ghost: {
			bg: 'transparent',
			text: '#6FD09E',
			border: 'transparent'
		}
	},

	// borders and accents
	border: {
		default: '#233537',
		muted: '#16221E',
		strong: '#199D61'
	},

	// feedback
	success: '#10B981',
	info: '#60A5FA',
	warning: '#F59E0B',
	danger: '#EF4444'
};

export default colors;

