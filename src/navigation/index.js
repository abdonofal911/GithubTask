import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './Tab';

const Stack = createStackNavigator();
const Navigator = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Tabs} name="Tabs" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
