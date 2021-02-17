import React, { useState} from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { PRIMARY } from '_styles/colors';

const DetailScreen = ({route, navigation}) => {
  const [isLoading, setLoading] = useState(true)

  const uri = route.params.uri;

  const hideSpinner = () => setLoading(false);

    return (
        <SafeAreaView style={styles.container}>
            <WebView 
              onLoad={() => hideSpinner()}
              source={{ uri: uri }}
            />
            {isLoading&& (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color={PRIMARY}
            />
      )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bold: {
        fontWeight: 'bold'
    },
    loader: {
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
})

export default DetailScreen;