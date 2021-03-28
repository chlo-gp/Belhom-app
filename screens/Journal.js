import React from "react";
import {View, StatusBar, Text} from "react-native";

export default function Journal() {
    return (
        <View style={{flex: 1, backgroundColor: "#000000"}}>
            <StatusBar barStyle="light-content"/>
            <Text style={{flex: 1, color: "#fff"}}> My Journal </Text>
        </View>
    )
};