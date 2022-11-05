import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper';
import StackAuth from './components/stackAuth';

export default function App() {


	const theme = {
		...DefaultTheme,
		roundness: 2,
		colors: {
			...DefaultTheme.colors,
			primary: '#3498db',
			accent: '#f1c40f',
		}
	};

	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<StackAuth />
			</NavigationContainer>
			<StatusBar style='auto' />
		</PaperProvider>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
