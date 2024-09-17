import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import { DrawerNavigationProp } from '@react-navigation/drawer';

type LoginPageProp = DrawerNavigationProp<RootStackParamList, 'Dashboard'>;

interface Props {
  navigation: LoginPageProp;
}
const List: React.FC<Props> = ({ navigation }) => {
  const todos = ['Learn React Native', 'Build a cool app', 'Deploy app to store'];

  return (
    <View style={styles.todoContainer}>
      <Text style={styles.heading}>To Do List</Text>
      {todos.map((todo, index) => (
        <Text key={index} style={styles.todoItem}>
          {index + 1}. {todo}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  todoItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default List;
