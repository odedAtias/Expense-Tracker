import { createContext, useReducer } from 'react';

// The shared state schema
export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	updateExpense: (id, { description, amount, date }) => {},
	deleteExpense: id => {},
	setExpenses: expenses => {},
});

// The reducer function
const expensesReducer = (state, action) => {
	switch (action.type) {
		// ADD Case
		case 'ADD':
			return [action.payload, ...state];
		// SET Case
		case 'SET':
			// Change the order of the expensese
			const inverted = action.payload.reverse();
			return inverted;
		// UPDATE Case
		case 'UPDATE':
			// find the index of the required expense
			const updatableExpenseIndex = state.findIndex(
				expense => expense.id === action.payload.id
			);
			// generating new expense with the updated data
			const updatableExpense = state[updatableExpenseIndex];
			const updatedItem = { ...updatableExpense, ...action.payload.data };
			// generating new expenses array with the updated expense
			const updatedExpenses = [...state];
			updatedExpenses[updatableExpenseIndex] = updatedItem;
			// return the new array
			return updatedExpenses;
		// DELETE Case
		case 'DELETE':
			return state.filter(expense => expense.id !== action.payload);
		default:
			return state;
	}
};

const ExpensesContextProvider = ({ children }) => {
	// reducer initialize
	const [expensesState, dispatch] = useReducer(expensesReducer, []);
	// expnese handlers
	const addExpense = expenseData =>
		dispatch({ type: 'ADD', payload: expenseData });

	const updateExpense = (id, expenseData) =>
		dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });

	const deleteExpense = id => dispatch({ type: 'DELETE', payload: id });

	const setExpenses = expenses => dispatch({ type: 'SET', payload: expenses });

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
		updateExpense: updateExpense,
		deleteExpense: deleteExpense,
		setExpenses: setExpenses,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
