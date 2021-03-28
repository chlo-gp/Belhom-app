import React from "react";
import {View, StatusBar, Text} from "react-native";

export default function Search() {
   return (
        <View style={{flex: 1, backgroundColor: "#eacccc"}}>
            <StatusBar barStyle="light-content"/>
            <Text style={{flex: 1, color: "#fff"}}> Search </Text>
        </View>
    )
};