import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { getUserDetails, UserDetails } from '../../services/home/dashboard';

type HeaderProps = DrawerNavigationProp<RootStackParamList, 'Dashboard'>;

interface Props {
  navigation: HeaderProps;
  openDrawer: () => void;
}
const HeaderComponent: React.FC<Props> = ({ navigation, openDrawer }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fetchUserDetails = async () => {
    try {
      const user = await getUserDetails('123');  // Pass user ID
      setUserDetails(user);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Home</Text>
      <Image
        source={{ uri: 'https://placekitten.com/50/50' }} 
        style={styles.profileIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default HeaderComponent;
