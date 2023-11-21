/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App() {
	
	  const Stack = createStackNavigator();

  /*return (
		<NavigationContainer>
			<SafeAreaView>
				<ScrollView>
						<ToDoList tasks={tasks} />
						<ToDoForm addTask={addTask} />
				</ScrollView>
			</SafeAreaView>
		</NavigationContainer>
  );*/
  return (
    <NavigationContainer>
      {/* Add the following: */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      {/**********************/}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;
