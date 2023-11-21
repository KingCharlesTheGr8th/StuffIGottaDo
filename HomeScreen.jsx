import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function HomeScreen({ navigation })
{
	const [tasks, setTasks] = useState(['Dont do laundry', 'Avoid the gym', 'Ignore the dog']);

	const addTask = (task) => {
		setTasks([...tasks, task]);
	  };

	return (
	<SafeAreaView>
				<ScrollView>
				<Button
					title="About"
					onPress={() => navigation.navigate('About')}
				/>
						<ToDoList tasks={tasks} />
						<ToDoForm addTask={addTask} />
				</ScrollView>
			</SafeAreaView>
	);
}

export default HomeScreen;