import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const MapScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
        <Text>지도</Text>
    </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default MapScreen;