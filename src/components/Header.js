import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	header: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	headerContainer: {
		display: 'flex',
		marginTop: 55,
		alignItems: 'center',
	},
})

const Header = () => {
	const { header, headerContainer } = styles;

	return (
		<View style={headerContainer}>
			<Text style={header}>
				Crypto Tracker
			</Text>
		</View>
	);
}

export default Header;
