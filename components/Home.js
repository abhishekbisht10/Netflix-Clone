import { StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from './request';

function Home({navigation, route}) {
  const loggedIn = route.params.loggedIn;

  !loggedIn && navigation.navigate('Welcome');

  return (
    <View style={[styles.container, styles.home]}>
    
      <Navbar loggedIn={true} navigation={navigation} />

      <ScrollView style={styles.scroll}>

        <Banner navigation={navigation} />
        
        <Row navigation={navigation} title='NETFLIX ORIGINALS' url={requests.fetchNetflixOriginals} diff={true} />
        <Row navigation={navigation} title='Trending Now' url={requests.fetchTrending} />
        <Row navigation={navigation} title='Top Rated' url={requests.fetchTopRated} />
        <Row navigation={navigation} title='Action Movies' url={requests.fetchActionMovies} />
        <Row navigation={navigation} title='Comedy Movies' url={requests.fetchComedyMovies} />
        <Row navigation={navigation} title='Horror Movies' url={requests.fetchHorrorMovies} />
        <Row navigation={navigation} title='Romance Movies' url={requests.fetchRomanceMovies} />
        <Row navigation={navigation} title='Documentaries' url={requests.fetchDocumantaries} />
        
      </ScrollView>

      <StatusBar style="auto" />
    </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    home: {
      backgroundColor: 'black',
    },
    scroll: {
      height: '100%',
      width: '100%',
    }
});