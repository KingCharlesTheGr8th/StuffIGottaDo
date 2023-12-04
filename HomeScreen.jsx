import React from 'react';
import { useState , useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import toDoItems from './data/tasks.json';

function HomeScreen({ navigation })
{
	const [tasks, setTasks] = useState([]);
	const addTask = (task) => {
		setTasks([...tasks, task]);
	  };

	//useEffect hook to load tasks from json file
	useEffect(() => {
		setTasks(toDoItems.tasks);
	}, []);
	/*if (tasks.length == 0)
	{
		for (let i = 0; i < toDoItems.tasks.length; i++) {
			console.log(i + ". Added task " + toDoItems.tasks[i] + " to list")
			addTask(toDoItems.tasks[i]);
		}
	}*/

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