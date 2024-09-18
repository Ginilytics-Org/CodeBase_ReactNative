import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LoginForm from '../../components/loginForm/form';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import { loginUser } from '../../services/auth/login';

type LoginPageProp = StackNavigationProp<RootStackParamList, 'LoginPage'>;

interface Props {
  navigation: LoginPageProp;
}
const LoginPage: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      console.log('Login successful:', response);
      navigation.navigate('Dashboard');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <LoginForm onLogin={handleLogin} navigation={navigation} />
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

export default LoginPage;
