import axios from './axios';
import { useEffect, useState } from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';

function Row({title, url, diff, navigation }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getMovie() {

            const req = await axios.get(url);
            const list = req.data.results;
            const newList = list.slice(0, 13);
            setMovie(newList);

        }
        getMovie();

    }, []);

    return (
        <View style={styles.row}>

            <Text style={styles.title}> 
                {title}
            </Text>

            <ScrollView horizontal={true}>
            {                
                movie.map((movi, n) => 

                <TouchableOpacity
                    key={n}
                    onPress={() => navigation.navigate('Card', { loggedIn: true, movie: movi })}
                >
                    <Image 
                        key={n}
                        style={[styles.card, diff && styles.cardDiff]} 
                        source={
                            movi.poster_path ?
                            {uri: `https://image.tmdb.org/t/p/original/${movi.poster_path}`}
                            :
                            {uri: `https://image.tmdb.org/t/p/original/${movi.backdrop_path}`}
                        }
                    />
                </TouchableOpacity>
                )
            }
            </ScrollView>
        </View>
    )
}

export default Row;

const styles = StyleSheet.create({
    row: {
        width: '100%',
        paddingTop: 10,
        paddingLeft: 0
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginLeft: 10,
        marginBottom: 8,
    },
    card: {
        height: 160,
        width: 130,
        marginHorizontal: 6,
        resizeMode: 'cover'
    },
    cardDiff: {
        height: 220,
        width: 150,
    }
})