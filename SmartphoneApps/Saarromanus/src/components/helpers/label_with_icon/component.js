import React from 'react';
import { View, Text } from 'react-native';

import SpaceLeft from '../space-left';
import VerticalSeparator from '../vertical-separator';

export default ({
	iconEl,
	label,
	labelFontSize = 20,
	labelFontWeight = 'normal',
	separator = false,
	absoluteIconPosition = null,
	backgroundColor = '#ffffff',
}) => {
	const getStyle = () =>
		absoluteIconPosition
			? { position: 'absolute', [absoluteIconPosition]: '30%' }
			: {};
	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor,
			}}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}>
				<View style={getStyle()}>{iconEl}</View>
				<SpaceLeft value={absoluteIconPosition || !iconEl ? 0 : 15}>
					<Text
						style={{
							fontSize: labelFontSize,
							fontWeight: labelFontWeight,
						}}>
						{label}
					</Text>
				</SpaceLeft>
			</View>
			{separator && <VerticalSeparator />}
		</View>
	);
};
