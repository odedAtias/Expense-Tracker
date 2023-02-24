// Hooks imports
import { useContext, useEffect, useState } from 'react';
// Context imports
import { ExpensesContext } from '../store/expenses-context';
// Custom components imports
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import LoadingOverlay from '../components/UI/LoadingOverlay';
// utils functionality imports
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

// RecentExpenses component
const RecentExpenses = () => {
	// loading indicator
	const [isFetching, setIsFetching] = useState(true);
	// Context initialize
	const expensesContext = useContext(ExpensesContext);

	// fetching the expenses from the database
	useEffect(() => {
		async function getExpenses() {
			setIsFetching(true);
			const expenses = await fetchExpenses();
			setIsFetching(false);
			expensesContext.setExpenses(expenses);
		}
		getExpenses();
	}, []);

	if (isFetching) return <LoadingOverlay />;

	// Filtering expenses by the last 7 days expenses
	const recentExpenses = expensesContext.expenses.filter(expense => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);
		return expense.date > date7DaysAgo && expense.date <= today;
	});
	// RecentExpenses render
	return (
		<ExpensesOutput
			expenses={recentExpenses}
			expensesPeriod='Last 7 Days'
			fallbackText='No registered expenses for the last 7 days.'
		/>
	);
};

export default RecentExpenses;
