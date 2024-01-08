import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Navbar from './Navbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  async function login() {
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        // console.log(user);
        navigation.navigate('Home', { loggedIn: true });

    } catch(err) {
        console.log(err.message);
        setError(true);
    }

    setEmail('');
    setPassword('');
  }

  return (
    <KeyboardAvoidingView 
        style={styles.container}
    >
        <Navbar loggedIn={false} navigation={navigation} />

        <ImageBackground 
            style={styles.background}
            source={require('./../assets/login.jpg')}
        />

        <View style={styles.inputContainer}>
            <Text 
                style={styles.heading}
            >Sign In</Text>

            <TextInput
                placeholder='Email'
                placeholderTextColor='rgba(0,0,0,0.7)'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor='rgba(0,0,0,0.7)'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={login} 
            >
                <Text style={styles.btnText}>
                    Sign In
                </Text>
            </TouchableOpacity>

            {
                error &&
                <Text 
                    style={{
                        color: 'red',
                        marginTop: 20,
                    }}
                >
                    Incorrect email and password.
                </Text>
            }

            <View style={styles.register}>
                <Text style={{color: 'white'}}>
                    New to Netflix? {' '} 
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{color: 'white', fontWeight: '600'}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

        <StatusBar style='auto' />
    </KeyboardAvoidingView>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    heading: {
        width: '85%',
        color: 'white',
        fontSize: 26,
        fontWeight: '600',
        marginVertical: 12,
        textAlign: 'left',
    },
    input: {
        height: 40,
        width: '85%',
        margin: 10,
        borderRadius: 4,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    button: {
        height: 40,
        marginTop: 16,
        width: '85%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E50914',
    },
    btnText: {
        fontSize: 16,
        color: 'white',
    },
    register: {
        color: 'white',
        marginVertical: 30,
        flexDirection: 'row'
    },
})