// RN Core components
import { Pressable, View, StyleSheet } from 'react-native';
// Ionicons (from vector icons API) import
import { Ionicons } from '@expo/vector-icons';

// IconButton component
const IconButton = ({ icon, size, color, onPress }) => {
	// IconButton component
	return (
		<Pressable
			onPress={onPress}
			// opacity when the button is pressed
			style={({ pressed }) => pressed && styles.pressed}>
			{/* We create this view for style reasons */}
			<View style={styles.buttonContaier}>
				<Ionicons name={icon} size={size} color={color} />
			</View>
		</Pressable>
	);
};

// IconButton styleSheet
const styles = StyleSheet.create({
	buttonContaier: {
		borderRadius: 24,
		padding: 6,
		marginHorizontal: 8,
		marginVertical: 2,
	},
	// Style when the icon was pressed
	pressed: {
		opacity: 0.75,
	},
});

export default IconButton;
