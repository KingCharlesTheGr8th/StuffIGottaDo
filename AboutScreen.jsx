import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  Text
} from 'react-native';

function AboutScreen({ navigation }) {
  return (
	<SafeAreaView>
		<ScrollView>
			<Button
				title="Home"
				onPress={() => navigation.navigate('Home')}
			/>
			<Text>Stuff I Gotta Do</Text>
			<Text>Very useful todolist app by Charles Ashmore</Text>
			<Text>I'm gonna be rich</Text>
		</ScrollView>
	</SafeAreaView>

  );
}

export default AboutScreen;