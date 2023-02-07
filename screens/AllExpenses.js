// RN Core components
import { Text } from 'react-native';
// Custom components imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

// AllExpenses component
const AllExpenses = () => {
	// AllExpenses render
	return <ExpensesOutput expensesPeriod='Total' />;
};

export default AllExpenses;
