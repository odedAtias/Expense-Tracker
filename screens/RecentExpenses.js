// Hooks imports
import { useContext } from 'react';
// Context imports
import { ExpensesContext } from '../store/expenses-context';
// Custom components imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
// utils functionality imports
import { getDateMinusDays } from '../util/date';

// RecentExpenses component
const RecentExpenses = () => {
	// Context initialize
	const expensesContext = useContext(ExpensesContext);
	// Filtering expenses by the last 7 days expenses
	const recentExpenses = expensesContext.expenses.filter(expense => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);

		return expense.date > date7DaysAgo;
	});
	// RecentExpenses render
	return (
		<ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' />
	);
};

export default RecentExpenses;
