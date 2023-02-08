// RN Core components
import { View, StyleSheet } from 'react-native';
// Custom components imports
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
// Constants
import { GlobalStyles } from '../../constants/styles';

// Dummy data
const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2021-12-19'),
	},
	{
		id: 'e2',
		description: 'A pair of trouses',
		amount: 89.29,
		date: new Date('2022-01-05'),
	},
	{
		id: 'e3',
		description: 'Some bananas',
		amount: 5.99,
		date: new Date('2021-12-01'),
	},
	{
		id: 'e4',
		description: 'A book',
		amount: 14.99,
		date: new Date('2022-02-19'),
	},
	{
		id: 'e5',
		description: 'Another book',
		amount: 18.99,
		date: new Date('2022-02-18'),
	},
	{
		id: 'e6',
		description: 'Some bananas',
		amount: 5.99,
		date: new Date('2021-12-01'),
	},
	{
		id: 'e7',
		description: 'A book',
		amount: 14.99,
		date: new Date('2022-02-19'),
	},
	{
		id: 'e8',
		description: 'Another book',
		amount: 18.99,
		date: new Date('2022-02-18'),
	},
];

// ExpensesOutput component
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
	// ExpensesOutput render
	return (
		<View style={styles.container}>
			{/* The summary part of the output (period and total expenses cost) */}
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			{/* List of expenses by period */}
			<ExpensesList expenses={DUMMY_EXPENSES} />
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
