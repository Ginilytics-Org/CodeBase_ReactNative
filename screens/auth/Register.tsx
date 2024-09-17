import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; // Import the RootStackParamList type
import RegisterForm from '../../components/registerForm/form';

type RegisterPageProp = StackNavigationProp<RootStackParamList, 'RegisterPage'>;

interface Props {
  navigation: RegisterPageProp;
}

const RegisterPage: React.FC<Props> = ({ navigation }) =>  {
  const handleRegister = (username:string, email:string, password:string) => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Register</Text>
        <RegisterForm navigation={navigation} onRegister={handleRegister}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    width:'88%'
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: 'center',
    color:'black'
  },
});

export default RegisterPage;
