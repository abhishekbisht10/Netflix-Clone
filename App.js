import { StyleSheet } from 'react-native';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Card from './components/Card';
import Login from './components/Login';
import Register from './components/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
      >
        
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Card' component={Card} />

      </Stack.Navigator>
    </NavigationContainer>
  )

  // return (
  //   loggedIn ? 

  //   <NavigationContainer>
  //     <Stack.Navigator 
  //       screenOptions={{headerShown: false}}
  //     >

  //       <Stack.Screen name='Home' component={Home} />
  //       <Stack.Screen name='Card' component={Card} />

  //     </Stack.Navigator>
  //   </NavigationContainer>

  //   :

  //   <View style={styles.container}>
  //     <Welcome setLoggedIn={setLoggedIn} />
  //   </View>

  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
