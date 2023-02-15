// Hooks imports
import { useContext } from 'react';
// Context's imports
import { ExpensesContext } from '../store/expenses-context';
// Custom components imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

// AllExpenses component
const AllExpenses = () => {
	// Context initialize
	const expensesContext = useContext(ExpensesContext);
	// AllExpenses render
	return (
		<ExpensesOutput
			expensesPeriod='Total'
			expenses={expensesContext.expenses}
		/>
	);
};

export default AllExpenses;
