import React, {useContext} from "react";
import {StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import {AuthContext} from "../Auth"
import { Ionicons } from "@expo/vector-icons";


export default function Profile({ navigation, route }) {
    const { currentUser } = useContext(AuthContext);

    console.log("user from google", currentUser);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topIcons}>
                    <TouchableOpacity onPress={navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={24} color="#52575D"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="settings" size={35} color="#045C61" style={{ marginTop: 5, marginLeft: 2 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../assets/belhom.png")} style={styles.image}/>
                    </View>
                    <View style={styles.add}>
                        <Ionicons name="ios-add" size={35} color="#DFD8C8" style={{ marginTop: 4 }}/>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Hello {currentUser.displayName} !</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{currentUser.email}</Text>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF4E2"
    },
    topIcons: {
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:'center',
        marginHorizontal:15,
        marginTop:15
    },
    text: {
        color: "#52575D"
    },
    image: {
        height:"100%",
        width:"100%",
        resizeMode: 'cover',
        borderRadius: 200,
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
})