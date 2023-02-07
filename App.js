import { StatusBar } from 'expo-status-bar';
// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom components imports
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

// Navigators initiallization
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// BottomTab component (The nested navigator component)
const ExpensesOverview = () => {
	// ExpensesOverview render
	return (
		<BottomTabs.Navigator>
			{/* First Screen - Recent Expenses */}
			<BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} />
			{/* Second Screen - All Expenses */}
			<BottomTabs.Screen name='AllExpenses' component={AllExpenses} />
		</BottomTabs.Navigator>
	);
};

// App Component
export default function App() {
	// App Render
	return (
		<>
			<StatusBar style='auto' />
			{/* Navigation configurations */}
			<NavigationContainer>
				{/* The main navigator */}
				<Stack.Navigator>
					{/* First Screen - Nested BottomTab Navigator*/}
					<Stack.Screen name='ExpensesOverview' component={ExpensesOverview} />
					{/* Second Screen - ManageExpense */}
					<Stack.Screen name='ManageExpense' component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
