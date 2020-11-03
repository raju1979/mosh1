import React from 'react';
import { SafeAreaView, Platform, StatusBar,  StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
          marginVertical: 10        
        }}
      >
      </View>
      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,          
        }}
      >
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: Platform.OS==='android' ? 40 : null,
    flex: 1,
    // backgroundColor: 'red'
  },
});
