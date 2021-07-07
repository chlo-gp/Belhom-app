import { Ionicons } from "@expo/vector-icons";
import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Detail({route}) {
    const [iconsVisible, setIconsVisible] = useState(false);

    return (
        <View style={styles.page}>
            <Image style={styles.imgProduct} source={require('../assets/product.jpg')}/>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.name}>{route.params.name}</Text>
                        <Text style={styles.brand}>{route.params.brand}</Text>
                    </View>
                    <Text style={styles.price}>{route.params.price} €</Text>
                </View>
                <Text style={styles.desc}>{route.params.desc}</Text>
                <Text style={{fontWeight: "700", paddingTop: 40, textTransform: 'uppercase'}}>
                    Comment l'appliquer ?
                </Text>
                <Text style={styles.desc}>{route.params.apply}</Text>
            </View>
                <View style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row',alignItems:'flex-start',marginTop:50}}>
                    <View style={{width:'45%'}}>
                        <TouchableOpacity style={styles.btn} onPress={() => setIconsVisible(!iconsVisible)}>
                            <Text style={styles.btnText}>Ajouter à la routine</Text>
                        </TouchableOpacity>
                        {iconsVisible ? (
                        <View style={styles.icons}>
                            <TouchableOpacity>
                                <Ionicons name='sunny' size={22} color="#FAF4E4" style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name='moon' size={22} color="#FAF4E4" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        ) : null}
                    </View>
                    <TouchableOpacity style={[styles.btn, {width:'50%'}]}>
                        <Text style={styles.btnText}>Acheter sur le site partenaire</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 0,
        paddingBottom: 5,
        backgroundColor: '#FAF4E4'
    },
    content: {
        padding: 25
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:15
    },
    imgProduct: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        margin: 0
    },
    name: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginVertical:5
    },
    brand: {
        color: '#045C61',
    },
    price:{
        fontSize:18,
        fontWeight:'700'
    },
    desc: {
        color:'#000',
        textAlign: 'justify',
        fontWeight: "300"
    },
    btn: {
        elevation: 5,
        backgroundColor: "#045C61",
        borderRadius: 10,
        paddingVertical: 18,
        paddingHorizontal: 10,
    },
    btnText:{
        color:'#FAF4E2',
        textAlign:'center',
        width:'100%'
    },
    icons:{
        justifyContent: 'space-around', 
        elevation: 5,
        flexDirection: 'row',
        alignItems:'center', 
        paddingVertical:10,
        backgroundColor:'#FAF4E4',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop:-8
    },
    icon:{
        backgroundColor:'#045C61',
        padding:8,
        borderRadius:8
    }
})