import Journal from "../screens/Journal";
import Rituals from "../screens/Rituals";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function ToolBar() {
    return (
<Tab.Navigator screenOptions={({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Rituels') {
            iconName = focused ? 'repeat' : 'repeat-outline';
        } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Recherche') {
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
    <Tab.Screen name="Recherche" component={Search}/>
    <Tab.Screen name="Profil" component={Profile}/>
</Tab.Navigator>
    )}