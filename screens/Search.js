import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, FlatList, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';


export default function Search({navigation}) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [sortValue, setSortValue] = useState("");
    const [showCat, setShowCat] = useState(false);


    useEffect(() => {
        fetch('http://192.168.1.99:5000/api/products/')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                setData(responseJson);
            })
            .catch((error) => console.error(error))
    }, []);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = data.filter(function (item) {
                let itemData;
                if (item.name && item.brand) {
                    itemData = (item.name + item.brand).toUpperCase();
                } else {
                    itemData = ''.toUpperCase();
                }
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(data);
            setSearch(text);
        }
    };

    const filterByCategory = (value) => {
        try {
            const newData = data.filter(function (item) {
                return item.category.includes(value);
            })
            setFilteredData(newData)
        } catch (e) {
            console.log(e)
        }
    }
    const sortByPrice = () => {
        if (!sortValue || sortValue === "all") return 0;
        if (sortValue === "desc" || sortValue === "asc") {
            filteredData.sort((a, b) => {
                const modifier = sortValue === "desc" ? -1 : 1;
                return (a.price - b.price) * modifier;
            })
        } else if (sortValue === "marque") {
            filteredData.sort(function (a, b) {
                let nameA = a.brand.toUpperCase(), nameB = b.brand.toUpperCase();
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
        }
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Rechercher un produit</Text>
            <View style={styles.search}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholderTextColor={'#FAF4E2'}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Rechercher ..."
                />
                <Ionicons name={'search'} color={'#FAF4E2'} size={22}/>
            </View>
            <View style={styles.filters}>
                <TouchableOpacity onPress={() => setShowCat(!showCat)}>
                    <Text style={styles.filterBtn}>Filtrer</Text>
                </TouchableOpacity>

                <Picker
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue) => { setSortValue(itemValue); sortByPrice();}}
                >
                    <Picker.Item label="Trier par" value="all"/>
                    <Picker.Item label="Marque" value="marque"/>
                    <Picker.Item label="Prix croissant" value="asc"/>
                    <Picker.Item label="Prix décroissant" value="desc"/>
                </Picker>

            </View>
            <FlatList
                style={{flex: 1, padding: 10}}
                numColumns={2}
                data={filteredData}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                    <TouchableOpacity style={{width: '45%', margin: 6}}
                                      onPress={() => navigation.navigate('Detail', item)}>
                        <View keyExtractor={(item) => item.id} style={{paddingBottom: 5}}>
                            <Image
                                source={require('../assets/product.jpg')}
                                style={styles.imgProduct}
                            />
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={[styles.filters,{padding:0,width:'90%', marginHorizontal:10}]}>
                                <Text style={styles.brand}>{item.brand}</Text>
                                <Text style={styles.brand}>{item.price} €</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}

            />
            {showCat ? (
                <View style={styles.filterBox}>
                    <View style={styles.filters}>
                        <Text style={styles.filterBtn}>Réinitialiser</Text>
                        <TouchableOpacity onPress={() => setShowCat(!showCat)}><Text
                            style={styles.filterBtn}>Valider</Text></TouchableOpacity>
                    </View>
                    <Text style={{paddingHorizontal: 20}}>Catégories</Text>
                    <View style={styles.filters}>
                        <TouchableOpacity style={styles.category}
                                          onPress={() => filterByCategory('peau')}><Text> Visage </Text></TouchableOpacity>
                        <TouchableOpacity style={styles.category}
                                          onPress={() => filterByCategory('corps')}><Text> Corps </Text></TouchableOpacity>
                        <TouchableOpacity style={styles.category}
                                          onPress={() => filterByCategory('cheveux')}><Text> Cheveux </Text></TouchableOpacity>
                        <TouchableOpacity style={styles.category}
                                          onPress={() => filterByCategory('barbe')}><Text> Barbe </Text></TouchableOpacity>
                    </View>
                </View>
            ) : null}

        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FAF4E4',
        paddingBottom: 0
    },
    filters: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        padding: 20
    },
    filterBtn: {
        fontSize: 18,
        fontWeight: '700'
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        textAlign: 'center'
    },
    imgProduct: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
        margin: 5,
        borderRadius: 20
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    brand: {
        color: '#045C61',
        textAlign: 'center'
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#045C61',
        color: '#FAF4E2',
        borderRadius: 9,
        paddingHorizontal: 15,
        width: 240,
        marginVertical: 20
    },
    textInputStyle: {
        height: 35,
        width: '70%',
        borderWidth: 0,
        paddingLeft: 10,
        marginVertical: 10,
        color: '#FAF4E2',

    },
    filterBox: {
        width: '100%',
        height: 250,
        backgroundColor: '#FAF4E2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 4,
    },
    category: {
        borderWidth: 1,
        borderColor: '#045C61',
        borderRadius: 12,
        paddingVertical: 5,
        paddingHorizontal: 15,
    }
})