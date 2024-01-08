import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Navbar from './Navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function register() {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        // console.log(user);
        navigation.navigate('Home', { loggedIn: true });

    } catch(err) {
        console.log(err.message);
    }

    setName('');
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
            >Register</Text>

            <TextInput
                placeholder='Name'
                placeholderTextColor='rgba(0,0,0,0.7)'
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}
            />
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
                onPress={register}
            >
                <Text style={styles.btnText}>
                    Register
                </Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <Text style={{color: 'white'}}>
                    Already have an account? {' '} 
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{color: 'white', fontWeight: '600'}}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

        <StatusBar style='auto' />
    </KeyboardAvoidingView>
  )
}

export default Register;

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
        paddingHorizontal: 12,
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