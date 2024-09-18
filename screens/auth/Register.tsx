import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; // Import the RootStackParamList type
import RegisterForm from '../../components/registerForm/form';
import { registerUser } from '../../services/auth/register';

type RegisterPageProp = StackNavigationProp<RootStackParamList, 'RegisterPage'>;

interface Props {
  navigation: RegisterPageProp;
}

const RegisterPage: React.FC<Props> = ({ navigation }) =>  {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegister = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    try {
      const response = await registerUser({ name, email, password });
      console.log('Registration successful:', response);
      // Navigate to login or dashboard screen after successful registration
      navigation.navigate('LoginPage');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
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
