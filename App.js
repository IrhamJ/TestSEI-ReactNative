import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ListUserScreen from './ListUserScreen';
import AddUserScreen from './AddUserScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ListUser" component={ListUserScreen} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
