// RN Core components
import { View } from 'react-native';
// Custom components imports
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

// ExpensesOutput component
const ExpensesOutput = ({ expenses }) => {
	// ExpensesOutput render
	return (
		<View>
			{/* The summary part of the output (period and total expenses cost) */}
			<ExpensesSummary />
			{/* List of expenses by period */}
			<ExpensesList />
		</View>
	);
};

export default ExpensesOutput;
