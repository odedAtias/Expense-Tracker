// RN Core components
import { FlatList, Text } from 'react-native';

// renderItem function
const renderExpenseItem = itemData => {
	return <Text>{itemData.item.description}</Text>;
};

// ExpensesList component
const ExpensesList = ({ expenses }) => {
	// ExpensesList render
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			// To determine the key property of every item will be the id
			keyExtractor={item => item.id}
		/>
	);
};

export default ExpensesList;
