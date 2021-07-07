import React from "react";
import {View, Image, StatusBar, Text, StyleSheet} from "react-native";
import HomeCard from '../components/HomeCard'


export default function Journal() {
    return (
        <View style={{flex: 1, backgroundColor: "#FAF4E4",alignItems:'center'}}>
            <StatusBar barStyle="light-content"/>
            <Image source={require("../assets/belhom.png")} style={styles.logo}/>
            <Text style={styles.title}> Mes rituels </Text>
            <View style={{flexDirection:'row', marginVertical:20 }} >
                <HomeCard iconType='moon' category='Barbe' />
                <HomeCard iconType='moon' category='Cheveux' />
            </View>
            <View style={{flexDirection:'row' }} >
                <HomeCard iconType='happy' category='Visage' />
                <HomeCard iconType='body' category='Corps' />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    logo:{
        display:'flex',
        width:200,
        height:200,
        margin:'auto'
    },
    title: {
        fontSize:24,
        color:'#000',
        textAlign:'left'

    }
})