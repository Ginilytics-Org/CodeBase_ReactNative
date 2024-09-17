import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import Separator from '../seperator/line';
import Icons from 'react-native-vector-icons/FontAwesome';

type FormNavigationProp = StackNavigationProp<RootStackParamList, 'LoginPage'>;

interface Props {
  onLogin: (username: string, password: string) => void;
  navigation: FormNavigationProp; 
}
const LoginForm: React.FC<Props> = ({ navigation, onLogin }) =>  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password); 
    navigation.navigate('Dashboard');
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
        placeholder="Password"
        placeholderTextColor={'#cccccc'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Separator/>
      {/* <View style={{alignItems:'center'}}>
        <Text style={styles.orText}>OR</Text>
        <View><Icons name='facebook' color={'black'} size={30}/></View>
      </View> */}
      <TouchableOpacity style={styles.newUser} onPress={()=> navigation.navigate('RegisterPage')}>
        <Text style={styles.newUserText}>New User? Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  orText:{
    fontSize: 16,
    color: '#727272',
    marginBottom:10
  },  
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

export default LoginForm;
