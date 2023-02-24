// RN Core components
import { View, ActivityIndicator, StyleSheet } from 'react-native';
// Contants
import { GlobalStyles } from './../../constants/styles';

// LoadingOverlay component
const LoadingOverlay = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color='white' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: GlobalStyles.colors.primary700,
	},
});

export default LoadingOverlay;
