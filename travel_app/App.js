import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './assets/src/Home';
import Details from './assets/src/Details';
import Profile from './assets/src/Profile';
import Likes from './assets/src/Likes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import colors from './assets/colors/colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        styles: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: ({ color }) => <Entypo name='home' size={32} color={color} /> }} />
      <Tab.Screen name='Likes' component={Likes} options={{ tabBarIcon: ({ color }) => <Entypo name='heart' size={32} color={color} /> }} />
      <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name='account' size={32} color={color} /> }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  }
})