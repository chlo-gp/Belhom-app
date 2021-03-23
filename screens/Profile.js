import React from "react";
import { View, StatusBar } from "react-native";

export default Screen = ({ Profile }) => (
    <View style={{ flex: 1, backgroundColor: "#eacccc" }}>
        <StatusBar barStyle="light-content" />
        <Text> My Profile </Text>
    </View>
);