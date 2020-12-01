import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { H6, CAPTION } from '_styles/typography'
import { SCALE_8 } from '_styles/spacing'
import { scaleSize } from '_styles/mixins'
import { GRAY_DARK } from '_styles/colors'
import Axios from 'axios'

const FeedItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.feed} onPress={() => {Linking.openURL(item.fields.URL)}}>
    <Image style={styles.feedImg} source={{uri: item.fields.Image }}/>
    <View style={styles.feedContainer}>
      <Text style={styles.feedTitle}>{item.fields.Title}</Text>
      <Text style={styles.feedContent}>{item.fields.Content}</Text>
    </View>
    </TouchableOpacity>
  )
}

const renderItem = ({ item }) => <FeedItem item={item}/>;

const HomeScreen = ({navigation}) => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    Axios.get("https://api.airtable.com/v0/appiQGv4bZRpA1GnH/Feed?api_key=keyXGbMKu4hxmnPjr")
    .then(res => {
      setRows(res.data.records)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>홈</Text>
      <FlatList data={rows} renderItem={renderItem} keyExtractor={item => item.id}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    width: "100%",
    margin: SCALE_8,
    fontSize: H6
  },
  carousel: {
    width: '100%',
    height: scaleSize(150),
    resizeMode: "contain"
  },
  feed: {
    margin: SCALE_8,
    borderRadius: scaleSize(10),
    borderWidth: scaleSize(0.5),
    borderColor: '#d6d7da',
  },
  feedImg: {
    width: '100%',
    height: scaleSize(150),
    padding: SCALE_8
  },
  feedContainer: {
    padding: SCALE_8,
  },
  feedTitle: {
    fontSize: H6,
    marginBottom: SCALE_8
  },
  feedContent: {
    marginBottom: SCALE_8
  },
  feedTime: {
    fontSize: CAPTION,
    color: GRAY_DARK
  }
});

export default HomeScreen;