import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from './axios';
import Navbar from './Navbar';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';


function Card({navigation, route}) {
    const loggedIn = route.params.loggedIn;
    
    !loggedIn && navigation.navigate('Welcome');

    const [url, setUrl] = useState();
    const movie = route.params.movie;
    // console.log(movie);
    

    useEffect(() => {

        async function getUrl() {

          let trailer = movie.media_type === 'movie' ? `movie/${movie.id}` : `tv/${movie.id}`;
          let req = await axios.get(`${trailer}+/videos?api_key=`)
          setUrl(req.data.results[0].key)

        }    
        getUrl();

    }, []);

    return (
        <View style={styles.container}>

            <Navbar loggedIn={true} navigation={navigation} isCard={true} />

            <View style={{marginTop: 110}} />

            <YoutubePlayer
                height={220}
                width='100%'
                play={true}
                videoId={url}
            />

            <Text style={styles.title}>
                { movie?.name || movie?.original_name }
            </Text>

            <Text style={styles.info}>
                {
                    movie.first_air_date ?
                    `${movie.first_air_date.slice(0,4)}`
                    :
                    `${movie.release_date.slice(0,4)}`
                } {'    '}
                <AntDesign name="arrowup" size={17} color="#228B22" /> {movie.popularity} 
            </Text>

            <TouchableOpacity 
                style={[styles.btn, {backgroundColor: '#fff'}]}
            >
                <Entypo name="controller-play" size={26} color="black" />
                <Text> Play</Text>
            </TouchableOpacity>

            
            <TouchableOpacity 
                style={[styles.btn, {backgroundColor: 'rgba(255,255,255,0.2)'}]}
            >
                <AntDesign name="download" size={20} color="white" /> 
                <Text style={{color: '#fff'}}>{' '} Download</Text>
            </TouchableOpacity>

            <Text style={styles.summary}>
                {movie.overview} 
            </Text>

            <Text> Mylist  Rate  Share btns</Text>
            <View style={styles.options}>

                <View style={{alignItems: 'center'}}>
                    <AntDesign name="plus" size={24} color="white" />
                    <Text style={{color: 'white'}}>My list</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <FontAwesome name="thumbs-o-up" size={24} color="white" />
                    <Text style={{color: 'white'}}>Rate</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Entypo name="share" size={24} color="white" />
                    <Text style={{color: 'white'}}>Share</Text>
                </View>

            </View>

        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'flex-start',
      backgroundColor: '#000'
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        marginStart: 10,
    },
    info: {
        color: '#fff',
        marginTop: 10,
        marginStart: 10,
        color: 'rgba(255,255,255,0.6)'
    },
    btn: {
        height: 40,
        width: '96%',
        fontSize: 20,
        marginTop: 10,
        marginStart: '2%',
        borderRadius: 3,

        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    summary: {
        color: '#fff',
        fontSize: 13.5,
        margin: 12,
        marginTop: 18,
        lineHeight: 20
    },
    options: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
});  