import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import Separator from '../seperator/line';

type FormNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterPage'>;

interface Props {
    onRegister: (username: string,email:string, password: string) => void;
    navigation: FormNavigationProp; 
}
const RegisterForm: React.FC<Props> = ({ navigation, onRegister }) =>  {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    onRegister(username, email, password); 
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'#cccccc'}
        value={username}
        onChangeText={setUsername}
      />
        <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#cccccc'}
        value={username}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#cccccc'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity style={styles.newUser} onPress={()=> navigation.navigate('LoginPage')}>
        <Text style={styles.newUserText}>Already a user? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 15,
    paddingVertical: 8,
    fontSize: 18,
    color:'black'
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 14,
  },
  newUser: {
    alignItems: "center",
  },
  newUserText: {
    color: '#007bff',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterForm;
