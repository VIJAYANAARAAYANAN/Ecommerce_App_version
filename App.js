import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashscreen from './src/splashscreen';
import home from './src/home';
import minimilisthome from './src/minimilisthome';
import scent from './src/scent'
import fashion from './src/fashion'
import beard from './src/beard'
import shoe from './src/shoe'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splashscreen" component={splashscreen} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="minimilisthome" component={minimilisthome} />
        <Stack.Screen name="scent" component={scent} />
        <Stack.Screen name="fashion" component={fashion} />
        <Stack.Screen name="beard" component={beard} />
        <Stack.Screen name="shoe" component={shoe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
