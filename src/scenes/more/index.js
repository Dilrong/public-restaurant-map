import React, { useState, useEffect}  from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity, Image, StatusBar, Platform, Linking, Share } from 'react-native';
import { H6, BODY1 } from '_styles/typography'
import { SCALE_8 } from '_styles/spacing'
import { scaleSize } from '_styles/mixins'
import Axios from 'axios'

const Profile = () => (
  <View style={styles.profile}>
    <Image style={styles.profile_img} source={require('../../assets/icon.png')}/>
    <Text>모두를 위한 맛집 지도</Text>
    <Text style={styles.profile_name}>공맛지</Text>
  </View>
)

const Item = ({ item }) => (
  <TouchableOpacity style={styles.item} onPress={() => { Linking.openURL(item.fields.URL) }}>
    <Text style={styles.title}>{item.fields.Name}</Text>
    <View style={styles.hr}/>
  </TouchableOpacity>
);

const renderItem = ({ item }) => <Item item={item} />;

const MoreScreen = ({navigation}) => {
  const [rows, setRows] = useState([])

  useEffect(() => {
      Axios.get("https://api.airtable.com/v0/appiQGv4bZRpA1GnH/More?api_key=keyXGbMKu4hxmnPjr")
      .then((res) => {
          setRows(res.data.records)
      }).catch(err => {
        console.log(err)
      })
  })
  return(
    <SafeAreaView style={styles.container}>
      <Profile/>
      <TouchableOpacity style={styles.item} onPress={() => { 
        Share.share({
          title: '공맛지 - 공무원 업무 추진비를 활용한 맛집 지도',
          message: 'https://play.google.com/store/apps/details?id=com.dilrong.restaurantmap'
        })
      }}>
        <Text style={styles.title}>공유하기</Text>
      <View style={styles.hr}/>
      <FlatList data={rows} renderItem={renderItem} keyExtractor={item => item.id}/>
  </TouchableOpacity>
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
    fontSize: BODY1
  },
  hr: {
    width: "100%",
    borderBottomColor: 'black',
    borderBottomWidth: scaleSize(0.2),
    marginTop: scaleSize(10),
    marginBottom: scaleSize(10)
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_img: {
    width: scaleSize(100),
    height: scaleSize(100),
    borderRadius: scaleSize(100),
    marginBottom: scaleSize(10)
  },
  profile_name: {
    margin: SCALE_8,
    fontSize: H6
  }
});

export default MoreScreen;