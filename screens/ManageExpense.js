// Hooks imports
import { useLayoutEffect, useContext } from 'react';
// RN Core components
import { View, StyleSheet } from 'react-native';
// Custom components imports
import IconButton from './../components/UI/IconButton';
import Button from '../components/UI/Button';
// Context imports
import { ExpensesContext } from './../store/expenses-context';
// Constants
import { GlobalStyles } from './../constants/styles';
// ManageExpense component
const ManageExpense = ({ route, navigation }) => {
	// Context initialize
	const expensesContext = useContext(ExpensesContext);

	const editedExpenseId = route.params?.expenseId;
	// common js trick to convert value into a Boolean (falsy value to false, truthy value to true)
	const isEditing = !!editedExpenseId;
	// Edit the title dynamically by the expense id
	useLayoutEffect(() => {
		navigation.setOptions({
			// check if we want to add expense or edit current expense
			title: isEditing ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEditing]);
	// delete expense handler
	const handleDeleteExpense = () => {
		expensesContext.deleteExpense(editedExpenseId);
		navigation.goBack();
	};
	// cancel manage expense handler
	const handleCancel = () => {
		navigation.goBack();
	};
	// confirm new expense handler
	const handleConfirm = () => {
		if (isEditing) {
			expensesContext.updateExpense(editedExpenseId, {
				description: 'Test!!!!!',
				amount: 19.99,
				date: new Date('2023-02-12'),
			});
		} else {
			expensesContext.addExpense({
				description: 'Test',
				amount: 19.99,
				date: new Date('2023-02-14'),
			});
		}
		navigation.goBack();
	};
	// ManageExpense render
	return (
		<View style={styles.container}>
			{/* Cancel Button */}
			<View style={styles.buttons}>
				<Button mode='flat' onPress={handleCancel} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={handleConfirm} style={styles.button}>
					{isEditing ? 'Update' : 'Add'}
				</Button>
			</View>
			{/* Delete Button UI */}
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon='trash'
						color={GlobalStyles.colors.error500}
						size={36}
						onPress={handleDeleteExpense}
					/>
				</View>
			)}
		</View>
	);
};

// Manage Expense StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: 'center',
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
});

export default ManageExpense;
