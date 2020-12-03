import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, Linking, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { GRAY_DARK } from '_styles/colors'
import { SCALE_4 } from '_styles/spacing'
import { CAPTION } from '_styles/typography'
import BASE_URL from '_utils/api'
import Axios from 'axios';

const MapMarker = (marker, index) => (
  <Marker
    key={index}
    image={require('../../assets/pin.png')}
    coordinate={{
      latitude: Number(marker.marker.latitude),
      longitude: Number(marker.marker.longitude)
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
  const [mapWidth, setMapWidth] = useState('99%')

  const updateMapStyle = () => {
    setMapWidth('100%')
  }

  const requestGeoLocationPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
  }

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
        <MapView 
          provider={PROVIDER_GOOGLE}
          mapType="standard"
          customMapStyle={googleMapStyle}
          style={[styles.map, { width: mapWidth }]}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          onMapReady={() => {
            Platform.OS === "android" ? requestGeoLocationPermission() : false
            updateMapStyle()
          }}
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

const googleMapStyle = [{
  featureType: "administrative",
  elementType: "geometry",
  stylers: [{
    visibility: "off"
  }]
}]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  map: {
    height: '100%'
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