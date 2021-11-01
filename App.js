/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
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
  
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { theme } from './Color';



const App: () => Node = () => {
 
 
   
   
  
   

  return (
  <View style={styles.container}>   
     <View style={styles.header}>



     </View>
     <View  style={styles.body}>
     <ScrollView>
       <View style={styles.items}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
       </View>
       <View style={styles.items}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
       </View>
       <View style={styles.items}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
       </View>
       <View style={styles.items}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
       </View>
       <View style={styles.items}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
       </View>
       <View style={styles.items}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
       </View>
       <View style={styles.items}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
       </View>
     </ScrollView>
    </View>
   <View style={styles.footer}>



   </View>
    </View>
 
    
   
    
  );
}

const styles = StyleSheet.create({
container:{
 flex:1
},

header: {
  flex:0.08,
  backgroundColor:"white"
},
body:{
  flex:1,
  backgroundColor:"#DCDCDC",
},
footer: {
  flex:0.08,
  backgroundColor:"white"
},
items:{
  marginTop:2,
  backgroundColor:"white"
}
});

export default App;
