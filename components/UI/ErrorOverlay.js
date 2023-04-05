// RN Core components
import { View, Text, StyleSheet } from 'react-native';
// Custom components imports
import Button from './Button';
// Constants
import { GlobalStyles } from '../../constants/styles';

const ErrorOverlay = ({ message, onConfirm }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>An error occurred !</Text>
			<Text style={[styles.text, styles.message]}>{message}</Text>
			<Button onPress={onConfirm}>Okay</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
	text: {
		textAlign: 'center',
		marginBottom: 8,
		color: GlobalStyles.colors.error50,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	message: {
		fontSize: 14,
		marginBottom: 20,
	},
});

export default ErrorOverlay;
