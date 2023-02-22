// Hooks imports
import { useState } from 'react';
// RN core components
import { View, Text, StyleSheet, Alert } from 'react-native';
// Custom components import
import Input from './Input';
import Button from '../UI/Button';
// utills
import { getForemattedDate } from '../../util/date';
import { GlobalStyles } from './../../constants/styles';

// ExpenseForm component
const ExpenseForm = ({
	submitButtonLabel,
	onCancel,
	onSubmit,
	defaultValues,
}) => {
	// local state of ExpenseForm component
	const [inputs, setInputs] = useState({
		amount: {
			value: defaultValues ? defaultValues.amount.toString() : '',
			isValid: true,
		},
		date: {
			value: defaultValues ? getForemattedDate(defaultValues.date) : '',
			isValid: true,
		},
		description: {
			value: defaultValues ? defaultValues.description : '',
			isValid: true,
		},
	});
	// ExpenseForm handlers
	const handleInputChange = (inputIdertifier, entredValue) => {
		setInputs(currentInputs => {
			return {
				...currentInputs,
				// Way to update keys/values dynamically
				[inputIdertifier]: { value: entredValue, isValid: true },
			};
		});
	};
	const handleSubmit = () => {
		const expenseData = {
			amount: +inputs.amount.value,
			date: new Date(inputs.date.value),
			description: inputs.description.value,
		};
		// Validation phase
		const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
		const descriptionIsValid = expenseData.description.trim().length > 0;
		// Non validate input (if someone from them output false)
		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			// Alert.alert('Invalid input', 'Please check your input values');
			setInputs(currentInputs => {
				return {
					amount: { value: currentInputs.amount.value, isValid: amountIsValid },
					date: { value: currentInputs.date.value, isValid: dateIsValid },
					description: {
						value: currentInputs.description.value,
						isValid: descriptionIsValid,
					},
				};
			});
			return;
		}
		onSubmit(expenseData);
	};
	// constant to determine if we have error in some input or no
	const formIsInvalid =
		!inputs.amount.isValid ||
		!inputs.date.isValid ||
		!inputs.description.isValid;
	// ExpenseForm render
	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={{ flex: 1 }}
					label='Amount'
					invalid={!inputs.amount.isValid}
					TextInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: handleInputChange.bind(this, 'amount'),
						value: inputs.amount.value,
					}}
				/>
				<Input
					style={{ flex: 1 }}
					label='Date'
					invalid={!inputs.date.isValid}
					TextInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: handleInputChange.bind(this, 'date'),
						value: inputs.date.value,
					}}
				/>
			</View>
			<Input
				label='Description'
				invalid={!inputs.description.isValid}
				TextInputConfig={{
					multiline: true,
					onChangeText: handleInputChange.bind(this, 'description'),
					value: inputs.description.value,
				}}
			/>
			{/* Error message */}
			{formIsInvalid && (
				<Text style={styles.errorText}>
					Invalid input values - please check your entered data
				</Text>
			)}
			{/* Cancel & Confirm Buttons */}
			<View style={styles.buttons}>
				<Button mode='flat' onPress={onCancel} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={handleSubmit} style={styles.button}>
					{submitButtonLabel}
				</Button>
			</View>
		</View>
	);
};

// ExpenseForm StyleSheet
const styles = StyleSheet.create({
	form: {
		marginTop: 80,
	},
	inputsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginVertical: 24,
	},
	// Buttons container (to flex them)
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
	errorText: {
		textAlign: 'center',
		color: GlobalStyles.colors.error500,
		margin: 15,
	},
});

export default ExpenseForm;
