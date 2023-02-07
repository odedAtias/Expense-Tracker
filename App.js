import { StatusBar } from 'expo-status-bar';
// RN Core components
import { StyleSheet, Text, View } from 'react-native';

// App Component
export default function App() {
	// App Render
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style='auto' />
		</View>
	);
}

// App StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
