import React, {useState, useRef, useEffect} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, FlatList, Image, useWindowDimensions, Animated} from 'react-native';
import Paginator from "./Paginator";
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Onboarding({navigation}) {
    const {width} = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewDoneBtn, setViewDoneBtn] = useState(false);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
    const slidesRef = useRef(null);

    const checkLastSlide = async () => {
        if (currentIndex === slides.length - 1) {
            setViewDoneBtn(true)
        }
    }
    const launchApp = async () => {
        try {
            await AsyncStorage.setItem('@viewedOnboarding', 'true')
        } catch (e) {
            console.log('Erreur setItem : ', e)
        } finally {
            navigation.replace('Login')
        }
    }

    const slides = [
        {
            id: 1,
            title: "Prends soin de toi dès maintenant",
            img: require('../assets/ecran-1.png'),
        },
        {
            id: 2,
            title: "Crée-toi le rituel qui te convient",
            img: require('../assets/ecran-2.png'),
        },
        {
            id: 3,
            title: "Retrouve tous tes produits préférés",
            img: require('../assets/ecran-3.png'),
        }
    ]
    return (
        <View style={styles.page}>
            <FlatList data={slides} style={{flex: 0.8}} renderItem={({item}) => (
                <View keyExtractor={(item) => item.id} style={[styles.container, {width}]}>
                    <Image
                        source={item.img}
                        style={styles.img}
                    />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            )} horizontal showsHorizontalScrollIndicator={false} pagingEnabled bounces={false}
                      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],
                          {
                              useNativeDriver: false,
                          })} scrollEventThrottle={32}
                      onViewableItemsChanged={viewableItemsChanged} viewabilityConfig={viewConfig}
                      onMomentumScrollEnd={checkLastSlide}
                      ref={slidesRef}
            />
            <Paginator data={slides} scrollX={scrollX}/>
            <View style={{flex:0.1, width, paddingRight:20}}>
                {viewDoneBtn ?
                    <TouchableOpacity onPress={launchApp} style={styles.btn}>
                        <Text style={styles.btnText}>Je me lance</Text>
                    </TouchableOpacity> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FAF4E4',
        alignItems: 'center',
    },
    container: {
        height: 650,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        height: 500,
        width: "90%",
        resizeMode: "contain",
        justifyContent: "center",
        marginVertical: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        textAlign: 'center',
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#045C61',
        paddingVertical: 10,
        textAlign: 'right',
        alignSelf: 'flex-end'
    }
});