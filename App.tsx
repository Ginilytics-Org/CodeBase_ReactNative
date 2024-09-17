import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/auth/Login';
import RegisterPage from './screens/auth/Register';
import Dashboard from './screens/home/Dashboard';

export type RootStackParamList = {
  LoginPage: undefined;
  RegisterPage: undefined;
  Dashboard: undefined;
  Carousel: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // Drawer navigator that will hold the dashboard
  const DrawerNavigator = () => (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName="LoginPage"
          screenOptions={{
            headerShown: false, 
          }}
        >
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="Dashboard" component={DrawerNavigator} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
