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
  Image
  
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
         <View>
       <Image style={styles.images} resizeMode="contain" source={require('./assets/images/paint.jpg')}></Image>
       </View>
       <View style={styles.textCon}>
         <Text>페인트</Text>
         <Text>남양주시 - 25초전</Text> 
         <Text>20000원</Text>
       </View>
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
 flex:1,
 backgroundColor:"#DCDCDC"
},

header: {
  flex:0.08,
  backgroundColor:"white"
},
body:{
  flex:1,
  
},
footer: {
  flex:0.08,
  backgroundColor:"white"
},
items:{
  
  flexDirection:"row",
  marginTop:2,
  backgroundColor:"white"
},
images: {
  marginTop:10,
  marginBottom:10,
  marginLeft:10,
  height:150,
  width:150,
  borderRadius:10,
},
textCon: {
  
  justifyContent:"center"
  
}
});

export default App;
