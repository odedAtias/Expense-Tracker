// RN Core components
import { Text } from 'react-native';
// Custom components imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

// RecentExpenses component
const RecentExpenses = () => {
	// RecentExpenses render
	return <ExpensesOutput expensesPeriod='Last 7 Days' />;
};

export default RecentExpenses;
