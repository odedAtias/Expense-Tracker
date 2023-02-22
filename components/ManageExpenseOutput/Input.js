// RN Core component
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from './../../constants/styles';

// Input component
const Input = ({ label, invalid, style, TextInputConfig }) => {
	const inputStyles = [styles.input];

	if (TextInputConfig && TextInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	if (invalid) {
		inputStyles.push(styles.invalidInput);
	}
	// Input render
	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={[styles.label, invalid && styles.invalidLabel]}>
				{label}
			</Text>
			<TextInput {...TextInputConfig} style={[inputStyles]} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 16,
	},
	label: {
		fontSize: 12,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: GlobalStyles.colors.primary100,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
		color: GlobalStyles.colors.primary700,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: 'top',
	},
	invalidLabel: {
		color: GlobalStyles.colors.error500,
	},
	invalidInput: {
		backgroundColor: GlobalStyles.colors.error50,
	},
});

export default Input;
