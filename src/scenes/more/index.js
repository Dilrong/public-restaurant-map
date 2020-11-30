import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const MoreScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
        <Text>더보기</Text>
    </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default MoreScreen;