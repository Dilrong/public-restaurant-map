import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Platform, FlatList, View, Image, Linking, StatusBar } from 'react-native';
import { SCALE_8, SCALE_4 } from '_styles/spacing'
import { H6, CAPTION } from '_styles/typography'
import { scaleSize } from '_styles/mixins'
import { GRAY_DARK } from '_styles/colors'
import BASE_URL from '_utils/api'
import Axios from 'axios';

const ListItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => {Linking.openURL(item.fields.URL)}}>
            <View style={styles.itemWrap}>
                <Image style={styles.itemImage} source={{uri: item.fields.Image }}/>
                <View>
                    <Text style={styles.itemName}>{item.fields.Name}</Text>
                    <Text style={styles.itemComment}>"{item.fields.Comment}"</Text>
                    <Text style={styles.itemTag}>{item.fields.Tag}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const renderItem = ({ item }) => <ListItem item={item}/>;

const ListScreen = ({navigation}) => {
    const [rows, setRows] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        Axios.get(BASE_URL)
        .then((res) => {
            setRows(res.data.records)
            setLoading(false)
        }).catch(err => {
          console.log(err)
          setLoading(false)
        })
    })
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>카테고리</Text>
            {isLoading? <Text style={styles.itemComment}>맛집 찾는 중</Text>:
            <FlatList data={rows} renderItem={renderItem} keyExtractor={item => item.id}/>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  title: {
    width: "100%",
    margin: SCALE_8,
    fontSize: H6
  },
  item: {
    margin: SCALE_8,
    width: "95%",
    borderBottomColor: 'black',
    borderBottomWidth: scaleSize(0.3),
    marginTop: SCALE_4,
    marginBottom: SCALE_4
  },
  itemWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  itemImage: {
    width: scaleSize(70),
    height: scaleSize(70),
    marginBottom: SCALE_8
  },
  itemName: {
    marginTop: SCALE_4,
    marginLeft: SCALE_8,
    fontWeight: 'bold'
  },
  itemComment: {
    marginTop: SCALE_8,
    marginLeft: SCALE_8,
  },
  itemTag: {
    marginTop: SCALE_8,
    marginLeft: SCALE_8,
    fontSize: CAPTION,
    color: GRAY_DARK,
  },
});

export default ListScreen;