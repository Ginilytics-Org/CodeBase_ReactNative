import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { getListItems } from '../../services/home/dashboard';
import { ListItem } from '../../services/home/dashboard';

type LoginPageProp = DrawerNavigationProp<RootStackParamList, 'Dashboard'>;

interface Props {
  navigation: LoginPageProp;
}
const List: React.FC<Props> = ({ navigation }) => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const items = await getListItems();
        setListItems(items);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    };

    fetchListItems();
  }, []);

  return (
    <View style={styles.todoContainer}>
      <Text style={styles.heading}>To Do List</Text>
      {listItems.map((todo, index) => (
        <Text key={index} style={styles.todoItem}>
          {index + 1}. {todo.title}
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
