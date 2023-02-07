// RN Core components
import { View, Text } from 'react-native';

// ExpensesSummary component
const ExpensesSummary = ({ expenses, periodName }) => {
	// function that return the expense amounts
	const expensesSum = expenses.reduce(
		(sum, expense) => sum + expense.amount,
		0
	);

	// ExpensesSummary render
	return (
		<View>
			<Text>{periodName}</Text>
			<Text>{expensesSum.toFixed(2)}$</Text>
		</View>
	);
};

export default ExpensesSummary;
