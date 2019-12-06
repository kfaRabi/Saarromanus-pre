import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';

import IndexScreen from './src/screens/index';
import SettingsScreen from './src/screens/settings';
import SightsCategoryScreen from './src/screens/sights-category';

import store from './src/store/';

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Settings: SettingsScreen,
		Sights: SightsCategoryScreen,
	},
	{
		initialRouteName: 'Index',
		headerLayoutPreset: 'center',
	}
);

const App = createAppContainer(navigator);

export default function() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
