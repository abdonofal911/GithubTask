import {Explore} from '../screens/Explore';
import {Repositories} from '../screens/Repositories';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Colors from '../themes/Colors';
import {fontScale, sWidth, scale} from '../themes/Scale';
import {Text, useColorScheme, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {width: sWidth * 0.3},
        tabBarActiveTintColor: Colors.mainColor,
        tabBarInactiveTintColor: Colors.label,
        swipeEnabled: false,
        tabBarIndicatorContainerStyle: {
          zIndex: 1999,
        },
        tabBarContentContainerStyle: {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        },
      }}>
      <Tab.Screen
        component={Explore}
        name="Explore"
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused
                  ? isDarkMode
                    ? Colors.White
                    : Colors.mainColor
                  : Colors.label,
                fontSize: fontScale(14),
              }}>
              Explore
            </Text>
          ),
          title: 'Explore',
          tabBarIndicatorStyle: {
            backgroundColor: Colors.green2,
          },
        }}
      />
      <Tab.Screen
        component={Repositories}
        name="Repositories"
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused
                  ? isDarkMode
                    ? Colors.White
                    : Colors.mainColor
                  : Colors.label,
                fontSize: fontScale(14),
              }}>
              Repositories
            </Text>
          ),
          title: 'Repositories',
          tabBarIndicatorStyle: {
            backgroundColor: Colors.green2,
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
