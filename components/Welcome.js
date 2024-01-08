import {View, Text, ImageBackground,TouchableOpacity, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from './Navbar';

function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.background}
                source={require('./../assets/login.jpg')}
            />

            <Navbar loggedIn={false} navigation={navigation} />

            <LinearGradient
                colors={['transparent','rgba(0,0,0,0.6)','rgba(0,0,0,0.9)']}
                style={styles.title}
            >

                <Text style={styles.heading}>
                    Unlimited movies, TV shows and more.
                </Text>

                <Text style={styles.subHeading}>
                    Watch anywhere. Cancel anytime.
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}   
                >
                    <Text style={styles.btnText}>GET STARTED</Text>
                </TouchableOpacity>

            </LinearGradient>

            <StatusBar style="auto" />
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    button: {
        height: 50,
        width: '116%',
        marginLeft: '-8%',
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: '#E50914',
    },
    btnText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    },
    title: {
        paddingVertical: 30,
        paddingHorizontal: '10%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 36,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
});