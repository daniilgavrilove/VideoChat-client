import { addDecorator } from '@storybook/react';
import {Theme} from '@/app/providers/ThemeProvider';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator';
import {RouterDecorator} from '@/shared/config/storybook/decorators/RouterDecorator';
import {StyleDecorator} from '@/shared/config/storybook/decorators/StyleDecorator';
import {SuspenseDecorator} from '@/shared/config/storybook/decorators/SuspenseDecorator';


export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: 'fullscreen',
	themes: {
		default: 'light',
		list: [
			{ name: 'light', class: Theme.LIGHT, color: '#ffffff' },
			{ name: 'dark', class: Theme.DARK, color: '#000000' },
			{ name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
		],
	},
};

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);
// addDecorator(SuspenseDecorator);
