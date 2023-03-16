import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Map from '../screens/Map';

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

function MainStackRoute() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Detail" component={Detail} />
      <MainStack.Screen name="Map" component={Map} />
    </MainStack.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen">
        {props => <MainStackRoute {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
