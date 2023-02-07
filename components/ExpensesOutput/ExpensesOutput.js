// RN Core components
import { View } from 'react-native';
// Custom components imports
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

// ExpensesOutput component
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
	// ExpensesOutput render
	return (
		<View>
			{/* The summary part of the output (period and total expenses cost) */}
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			{/* List of expenses by period */}
			<ExpensesList />
		</View>
	);
};

export default ExpensesOutput;
