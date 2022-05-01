import react from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import Home from './screens/Home';
import Car from './screens/Car';
import Bike from './screens/Bike';
import Blog from './screens/Blog';
import Account from './screens/Account';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Car') {
              iconName = focused ? 'car' : 'car';
            } else if (route.name === 'Bike') {
              iconName = focused ? 'car' : 'car';
            } else if (route.name === 'Blog') {
              iconName = focused ? 'blog' : 'blog';
            } else if (route.name === 'Account') {
              iconName = focused ? 'user-alt' : 'user-alt';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Car" component={Car} />
        <Tab.Screen name="Bike" component={Bike} />
        <Tab.Screen name="Blog" component={Blog} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
