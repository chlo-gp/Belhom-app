import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile'
import Journal from "./screens/Journal";
import Search from "./screens/Search";
import Rituals from "./screens/Rituals";
import AddButton from "./components/AddButton";
import Ionicons from '@expo/vector-icons/Ionicons';

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Rituels') {
                        iconName = focused ? 'repeat' : 'repeat-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
                           tabBarOptions={{
                               activeTintColor: '#68827a',
                               activeBackgroundColor: '#FAF4E2',
                               inactiveTintColor: 'gray',
                           }}>
                <Tab.Screen name="Home" component={Journal}/>
                <Tab.Screen name="Rituels" component={Rituals}/>
                <Tab.Screen name="Add" component={AddButton}/>
                <Tab.Screen name="Search" component={Search}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}