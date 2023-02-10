import { StatusBar } from 'expo-status-bar';
// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Custom components imports
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import IconButton from './components/UI/IconButton';
// Constants
import { GlobalStyles } from './constants/styles';
// Ionicons (from vector icons API) import
import { Ionicons } from '@expo/vector-icons';

// Navigators initiallization
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// BottomTab component (The nested navigator component)
const ExpensesOverview = () => {
	// ExpensesOverview render
	return (
		<BottomTabs.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				headerTintColor: 'white', // Changing the title color of the header to white
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				tabBarActiveTintColor: GlobalStyles.colors.accent500, // To emphasize the actived bottom
				headerTitleAlign: 'center', // To align the title to the center
				// if we defined tintColor we can get him from the headerRight function argument 'tintColor'
				headerRight: ({ tintColor }) => (
					<IconButton
						icon='add-circle-outline'
						size={24}
						color={tintColor}
						onPress={() => navigation.navigate('ManageExpense')}
					/>
				),
			})}>
			{/* First Screen - Recent Expenses */}
			<BottomTabs.Screen
				name='RecentExpenses'
				component={RecentExpenses}
				options={{
					title: 'Recent Expenses', // To set new title on the headerss
					tabBarLabel: 'Recent', // To set new label to the tab
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='hourglass' size={size} color={color} />
					), // To set the icon of the tab
				}}
			/>
			{/* Second Screen - All Expenses */}
			<BottomTabs.Screen
				name='AllExpenses'
				component={AllExpenses}
				options={{
					title: 'All Expenses',
					tabBarLabel: 'All',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='calendar' size={size} color={color} />
					),
				}}
			/>
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
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: GlobalStyles.colors.primary500,
						},
						headerTintColor: 'white',
						headerTitleAlign: 'center',
					}}>
					{/* First Screen - Nested BottomTab Navigator*/}
					<Stack.Screen
						name='ExpensesOverview'
						component={ExpensesOverview}
						options={{
							// Omit the default header of the navigator
							headerShown: false,
						}}
					/>
					{/* Second Screen - ManageExpense */}
					<Stack.Screen
						name='ManageExpense'
						component={ManageExpense}
						options={{
							// modal pops up (only in IOS)
							presentation: 'modal',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
