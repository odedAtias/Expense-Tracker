import { createContext, useReducer } from 'react';

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
	{
		id: 'e9',
		description: 'udemy course - RN',
		amount: 23.99,
		date: new Date('2023-02-09'),
	},
];

// The shared state schema
export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	updateExpense: (id, { description, amount, date }) => {},
	deleteExpense: id => {},
});

// The reducer function
const expensesReducer = (state, action) => {
	switch (action.type) {
		// ADD Case
		case 'ADD':
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload, id: id }, ...state];
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
	const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
	// expnese handlers
	const addExpense = expenseData =>
		dispatch({ type: 'ADD', payload: expenseData });

	const updateExpense = (id, expenseData) =>
		dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });

	const deleteExpense = id => dispatch({ type: 'DELETE', payload: id });

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
		updateExpense: updateExpense,
		deleteExpense: deleteExpense,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
