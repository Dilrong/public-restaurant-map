import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform, Text, Dimensions, Linking } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { GRAY_DARK } from '_styles/colors'
import { SCALE_8, SCALE_4 } from '_styles/spacing'
import { H6, CAPTION } from '_styles/typography'
import BASE_URL from '_utils/api'
import Axios from 'axios';

const MapMarker = (marker, index) => (
  <Marker
    key={index}
    image={require('../../assets/pin.png')}
    coordinate={{
      latitude: marker.marker.latitude,
      longitude: marker.marker.longitude
    }}
  >
    <Callout
      style={styles.callout}
      onPress={()=>{Linking.openURL(marker.marker.URL)}}>
        <Text style={styles.name}>{marker.marker.Name}</Text>
        <Text style={styles.comment}>"{marker.marker.Comment}"</Text>
        <Text style={styles.address}>{marker.marker.Address}</Text>
    </Callout>
  </Marker>
)

const MapScreen = ({navigation}) => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    Axios.get(BASE_URL)
    .then((res) => {
        setRows(res.data.records)
    }).catch(err => {
      console.log(err)
    })
  })

  return(
    <SafeAreaView style={styles.container}>
      <Text></Text>
        <MapView 
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          showsUserLocation
          initialRegion={{
            latitude: 36.464496,
            longitude: 127.768667,
            latitudeDelta: 4,
            longitudeDelta: 4,
        }}
        >
          {rows.map((data, index) => (
            <MapMarker key={index} marker={data.fields} index={index}/>
          ))}
        </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  callout: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontWeight: 'bold',
    paddingBottom: SCALE_4
  },
  comment: {
    fontSize: CAPTION,
    color: GRAY_DARK,
    paddingBottom: SCALE_4
  },
  address: {
    fontSize: CAPTION
  }
});

export default MapScreen;