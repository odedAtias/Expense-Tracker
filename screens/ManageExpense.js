// Hooks imports
import { useLayoutEffect, useContext, useState } from 'react';
// RN Core components
import { View, StyleSheet } from 'react-native';
// Custom components imports
import IconButton from './../components/UI/IconButton';
import ExpenseForm from '../components/ManageExpenseOutput/ExpenseForm';
import LoadingOverlay from '../components/UI/LoadingOverlay';
// Context imports
import { ExpensesContext } from './../store/expenses-context';
// Constants
import { GlobalStyles } from './../constants/styles';
// utils
import { storeExpense, updateExpense, deleteExpense } from './../util/http';

// ManageExpense component
const ManageExpense = ({ route, navigation }) => {
	// loading indicator
	const [isSubmitting, setIsSubmitting] = useState(false);
	// Context initialize
	const expensesContext = useContext(ExpensesContext);
	const editedExpenseId = route.params?.expenseId;

	// common js trick to convert value into a Boolean (falsy value to false, truthy value to true)
	const isEditing = !!editedExpenseId;

	const selectedExpense = expensesContext.expenses.find(
		expense => expense.id === editedExpenseId
	);

	// Edit the title dynamically by the expense id
	useLayoutEffect(() => {
		navigation.setOptions({
			// check if we want to add expense or edit current expense
			title: isEditing ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEditing]);

	// delete expense handler
	const handleDeleteExpense = async () => {
		setIsSubmitting(true);
		await deleteExpense(editedExpenseId);
		expensesContext.deleteExpense(editedExpenseId);
		navigation.goBack();
	};

	// cancel manage expense handler
	const handleCancel = () => {
		navigation.goBack();
	};

	// confirm new expense handler
	const handleConfirm = async expenseData => {
		setIsSubmitting(true);
		if (isEditing) {
			expensesContext.updateExpense(editedExpenseId, expenseData);
			await updateExpense(editedExpenseId, expenseData);
		} else {
			const id = await storeExpense(expenseData);
			expensesContext.addExpense({ ...expenseData, id: id });
		}
		navigation.goBack();
	};

	if (isSubmitting) return <LoadingOverlay />;

	// ManageExpense render
	return (
		<View style={styles.container}>
			{/* Expense form */}
			<ExpenseForm
				submitButtonLabel={isEditing ? 'Update' : 'Add'}
				onCancel={handleCancel}
				onSubmit={handleConfirm}
				defaultValues={selectedExpense}
			/>

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
});

export default ManageExpense;
