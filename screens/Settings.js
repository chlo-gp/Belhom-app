import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StatusBar, Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from "react-native";

export default function Settings() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FAF4E2" }}>
            <Text style={{ color: "#255A5F", fontSize: 24, margin: 15 }}> Paramètres </Text>
            <TouchableOpacity onPress={() => { WebBrowser.openBrowserAsync('https://belhom-website.herokuapp.com/blog') }}>
                <View style={styles.settingsRow}>
                    <View style={styles.headerRow} >
                        <Ionicons name="newspaper-outline" size={30} color="#FAF4E2" style={{ marginTop: 4 }} />
                        <Text style={styles.text}>Blog</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={30} color="#FAF4E2" style={{ marginTop: 4 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { WebBrowser.openBrowserAsync('https://belhom-website.herokuapp.com/mentions') }}>
                <View style={styles.settingsRow}>
                    <View style={styles.headerRow}>
                        <Ionicons name="document-text-outline" size={30} color="#FAF4E2" style={{ marginTop: 4 }} />
                        <Text style={styles.text}>CGU</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={30} color="#FAF4E2" style={{ marginTop: 4 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { WebBrowser.openBrowserAsync('https://belhom-website.herokuapp.com/about') }}>
                <View style={styles.settingsRow}>
                    <View style={styles.headerRow}>
                        <Ionicons name="people" size={30} color="#FAF4E2" style={{ marginTop: 4 }} />
                        <Text style={styles.text}>A propos</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={30} color="#FAF4E2" style={{ marginTop: 4 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF4E2"
    },
    settingsRow: {
        backgroundColor: '#255A5F',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 5
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "#FAF4E2",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 15
    }
})