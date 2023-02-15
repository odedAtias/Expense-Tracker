// RN Core components
import { View, StyleSheet } from 'react-native';
// Custom components imports
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
// Constants
import { GlobalStyles } from '../../constants/styles';

// ExpensesOutput component
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
	// ExpensesOutput render
	return (
		<View style={styles.container}>
			{/* The summary part of the output (period and total expenses cost) */}
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			{/* List of expenses by period */}
			<ExpensesList expenses={expenses} />
		</View>
	);
};

// ExpensesOutput StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingTop: 12,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
		// To grow the bgcolor to all the space that available in ExpensesOutput component
		flex: 1,
	},
});

export default ExpensesOutput;
