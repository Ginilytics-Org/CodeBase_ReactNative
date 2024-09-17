import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/header/headerTile';
import Carousel from '../../components/carousel/carousel';
import TodoList from '../../components/list/list';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DashboardPageProps = DrawerNavigationProp<RootStackParamList, 'Dashboard'>;

interface Props {
  navigation: DashboardPageProps;
}
const Dashboard: React.FC<Props> = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header openDrawer={openDrawer} navigation={navigation}/>
      <ScrollView>
        <Carousel navigation={navigation}/>
        <TodoList navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
