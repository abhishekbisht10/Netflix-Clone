import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

function Navbar({loggedIn, navigation, isCard}) {
    const [hide, setHide] = useState(true);

    return (
        loggedIn ?

        <View style={styles.container}>
    
            {
            isCard ?
            // Card screen
            <Ionicons 
                name="arrow-back" 
                size={24} 
                color="white" 
                onPress={() => navigation.navigate('Home', { loggedIn: true })} 
            />
            :
            // Home screen
            <Image 
                style={{height: 30, width: 90, resizeMode: 'contain'}}
                source={require('./../assets/navbar-logo.png')}
            />
            }

            {/* Avatar icon */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                <Feather name="search" size={22} color="white" />

                <TouchableOpacity 
                    onPress={() => setHide(!hide)} 
                >
                    <Image 
                        style={{height: 30, width: 30, resizeMode: 'contain', marginLeft: 16}}
                        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}}
                    />
                </TouchableOpacity>    

            </View>

            {/* Logout Panel */}
            <TouchableOpacity 
                onPress={() => navigation.navigate('Welcome')}
                style={[styles.logoutPanel, {display: hide ? 'none' : 'flex'} ]} 
            >
                <MaterialIcons name="logout" size={18} color="black" />
                <Text>Logout</Text>
            </TouchableOpacity>
            
        </View>

        :

        // logged out
        <View style={styles.container}>
            <Image 
                style={{height: 40, width: 30, resizeMode: 'contain'}}
                source={require('./../assets/navbar-icon.png')}
            />
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                <Text style={styles.navText}>Privacy {'  '}</Text>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.navText}>Sign In {'  '}</Text>
                </TouchableOpacity>

                <Image 
                    style={{height: 26, width: 10}}
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/8212/8212730.png'}}
                />
            </View>
            
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        zIndex: 1,
        paddingHorizontal: 25,

        position: 'absolute',
        top: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navText: {
        color: 'white', 
        fontSize: 16, 
    },
    logoutPanel: {
        height: 40, 
        width: 90, 
        backgroundColor: '#fff', 
        position: 'absolute', 
        top: 55, 
        right: 16,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})