import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'; 
import store from './store'; 

import splashscreen from './src/splashscreen';
import home from './src/home';
import minimilisthome from './src/minimilisthome';
import scent from './src/scent'
import fashion from './src/fashion'
import beard from './src/beard'
import shoe from './src/shoe'
import protein  from './src/protein';
import login from './src/login'
import register from './src/register'
import productdetailscreen from './src/productdetailscreen';
import likepro from './src/likepro';
import cartpro from './src/cartpro';
import account from './src/account';
import categories from './src/categories';
import Offer from './src/offer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splashscreen" component={splashscreen} />
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="register" component={register} />
          <Stack.Screen name="home" component={home} />
          <Stack.Screen name="minimilisthome" component={minimilisthome} />
          <Stack.Screen name="scent" component={scent} />
          <Stack.Screen name="fashion" component={fashion} />
          <Stack.Screen name="beard" component={beard} />
          <Stack.Screen name="shoe" component={shoe} />
          <Stack.Screen name="protein" component={protein} />
          <Stack.Screen name="productdetailscreen" component={productdetailscreen} /> 
          <Stack.Screen name="cartpro" component={cartpro} />
          <Stack.Screen name="likepro" component={likepro}/>
          <Stack.Screen name="offer" component={Offer}/>
          <Stack.Screen name="categories" component={categories}/>
          <Stack.Screen name="account" component={account}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
