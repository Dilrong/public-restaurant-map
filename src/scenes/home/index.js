import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const HomeScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
        <Text>홈</Text>
    </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default HomeScreen;