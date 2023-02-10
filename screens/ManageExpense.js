// Hooks imports
import { useLayoutEffect } from 'react';
// RN Core components
import { Text } from 'react-native';
// ManageExpense component
const ManageExpense = ({ route, navigation }) => {
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
	// ManageExpense render
	return <Text>{editedExpenseId}</Text>;
};

export default ManageExpense;
