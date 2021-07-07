import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeCard = ({ iconType, category }) => {
    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <Ionicons name={iconType} size={30} color="#FAF4E4" />
                <Text style={styles.categoryText} >{category}</Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <Ionicons name='sunny' size={22} color="#045C61" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='moon' size={22} color="#045C61" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeCard;

const styles = StyleSheet.create({
    container: {
        width: '45%',
        borderRadius: 10,
        backgroundColor: '#045C61',
        padding: 15,
        marginHorizontal:10
    },
    icons:{
        justifyContent: 'space-around', 
        flexDirection: 'row',
        alignItems:'center', 
        paddingVertical:10,
        marginTop:15
    },
    icon:{
        backgroundColor:'#FAF4E4',
        padding:8,
        borderRadius:8
    },
    category:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    categoryText:{
        fontSize:18,
        fontWeight:'800',
        color:'#FAF4E4'
    }
});