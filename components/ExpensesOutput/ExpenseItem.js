// RN Core components
import { Pressable, View, Text, StyleSheet } from 'react-native';
// Constants
import { GlobalStyles } from './../../constants/styles';

// ExpenseItem component
const ExpenseItem = ({ description, date, amount }) => {
	// ExpenseItem render
	return (
		// We want the expenseItem will be pressable for manage him after tab him
		<Pressable>
			<View style={styles.expenseItem}>
				{/* Container the contains the expense description and the date seperatly */}
				<View>
					<Text style={[styles.textBase, styles.description]}>
						{description}
					</Text>
					<Text style={styles.textBase}>{date.toString()}</Text>
				</View>
				{/* Container the contains the expense amount */}
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>{amount}</Text>
				</View>
			</View>
		</Pressable>
	);
};

// ExpenseItem StyleSheet
const styles = StyleSheet.create({
	// expenseItem container
	expenseItem: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: GlobalStyles.colors.primary500,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 6,
		// shadow for android and ios
		elevation: 3,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
	},
	// Shared style object for the text's
	textBase: {
		color: GlobalStyles.colors.primary100,
	},
	description: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: 'bold',
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: 'white',
		// to center the amount in their container
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
	},
	amount: {
		color: GlobalStyles.colors.primary500,
		fontWeight: 'bold',
	},
});

export default ExpenseItem;
