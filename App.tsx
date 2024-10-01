import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MenuListScreen from './MenuListScreen';
import CourseSelectionScreen from './CourseSelectionScreen';
import SummaryScreen from './SummaryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home', headerStyle: { backgroundColor: '#FFDAB9' }, headerTintColor: '#000', headerTitleStyle: { fontWeight: 'bold' } }}
        />
        <Stack.Screen 
          name="MenuList" 
          component={MenuListScreen} 
          options={{ title: 'Menu List', headerStyle: { backgroundColor: '#FFDAB9' }, headerTintColor: '#000', headerTitleStyle: { fontWeight: 'bold' } }} 
        />
        <Stack.Screen 
          name="CourseSelection" 
          component={CourseSelectionScreen} 
          options={{ title: 'Select Course', headerStyle: { backgroundColor: '#FFDAB9' }, headerTintColor: '#000', headerTitleStyle: { fontWeight: 'bold' } }} 
        />
        <Stack.Screen 
          name="Summary" 
          component={SummaryScreen} 
          options={{ title: 'Order Summary', headerStyle: { backgroundColor: '#FFDAB9' }, headerTintColor: '#000', headerTitleStyle: { fontWeight: 'bold' } }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
