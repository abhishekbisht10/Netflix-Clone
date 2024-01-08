import { useState, useEffect } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';
import requests from './request';
import axios from './axios';
const url = 'https://image.tmdb.org/t/p/original/';


function Banner({navigation}) {
    const [movie, setMovie] = useState([]);

    const random = () => {
        return Math.floor(Math.random()*20);
    }

    useEffect(() => {
        async function getMovie() {

            const req = await axios.get(requests.fetchNetflixOriginals);
            setMovie(req.data.results[random()]);
            
        }
        getMovie();

    }, []);

    return (
        <View style={styles.banner}>
            <Image 
                style={{height: '100%', resizeMode: 'cover'}}
                source={
                    movie.backdrop_path && {
                    uri: `${url}${movie.backdrop_path}`
                }}
            />
            
            <LinearGradient
                colors={['transparent','rgba(0,0,0,0.6)']}
                style={styles.titleBox}
            >
                <Text style={styles.title}>
                    { movie?.name || movie?.original_name }
                </Text>

                <View style={styles.infoBox}>

                    <View style={{alignItems: 'center'}}>
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={{color: 'white'}}>My list</Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.play}
                        onPress={() => navigation.navigate('Card', {movie: movie})}    
                    >
                        <Entypo name="controller-play" size={24} /> 
                        <Text style={{fontWeight: '700'}}> Play</Text>    
                    </TouchableOpacity>

                    <View style={{alignItems: 'center'}}>
                        <AntDesign name="infocirlceo" size={22} color="white" />
                        <Text style={{color: 'white'}}>Info</Text>
                    </View>
                </View>
                
            </LinearGradient>
        </View>
    )
}

export default Banner;

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.55,
    },
    titleBox: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 10,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: '600',
        alignSelf: 'center',
        marginBottom: 20
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    play: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        paddingRight: 15,
        borderRadius: 6,
    }
})