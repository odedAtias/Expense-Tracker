// RN Core components
import { View, Text, StyleSheet } from 'react-native';
// Constants
import { GlobalStyles } from './../../constants/styles';

// ExpensesSummary component
const ExpensesSummary = ({ expenses, periodName }) => {
	// function that return the expense amounts
	const expensesSum = expenses.reduce(
		(sum, expense) => sum + expense.amount,
		0
	);

	// ExpensesSummary render
	return (
		<View style={styles.container}>
			<Text style={styles.periodName}>{periodName}</Text>
			<Text style={styles.expensesSum}>{expensesSum.toFixed(2)}$</Text>
		</View>
	);
};

// ExpensesSummary StyleSheet
const styles = StyleSheet.create({
	container: {
		padding: 8,
		backgroundColor: GlobalStyles.colors.primary50,
		borderRadius: 6,
		// To flex the items side by side with space between them
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	periodName: {
		fontSize: 12,
		color: GlobalStyles.colors.primary400,
	},
	expensesSum: {
		fontSize: 16,
		fontWeight: 'bold',
		color: GlobalStyles.colors.primary500,
	},
});

export default ExpensesSummary;
