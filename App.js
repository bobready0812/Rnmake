/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Alert,
  Image,
  Button,

  
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { theme } from './Color';

const Stack = createNativeStackNavigator(); 






const App: () => Node = () => {
 

   

  return (
  <View style={styles.container}>
   <ScrollView style={{flexGrow:1 }}> 
   <View style={{flex:1, backgroundColor:"skyblue"}}>

   </View>
   
   <View>
     
     </View>

     <View>
     
     </View>
  


   </ScrollView>

  </View>
    


  );
}

const styles = StyleSheet.create({
 container:{
   flex:1,
 }
 

});

export default App;
