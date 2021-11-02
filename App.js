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
       <View style={styles.ham}> 
         <Text style={styles.txham}>H</Text>
       </View>
     <View style={styles.search}>
       <Text style={styles.txSearch}>S</Text>
       </View >  
       
       <View style={styles.alert}>
         <Text style={styles.txAlert}>A</Text>
       </View>


     </View>
     <View  style={styles.body}>
     <ScrollView>
       <View style={styles.items}>
         <View>
       <Image style={styles.images} resizeMode="contain" source={require('./assets/images/paint.jpg')}></Image>
       </View>
       <View style={styles.textCon}>
         <Text style={styles.offering}>페인트</Text>
         <Text style={styles.timeAndLocation}>남양주시 - 25초전</Text> 
         <Text style={styles.price}>20,000</Text>
       </View>
       </View>
       <View style={styles.items}>
         <View>
       <Image style={styles.images} resizeMode="contain" source={require('./assets/images/paint.jpg')}></Image>
       </View>
       <View style={styles.textCon}>
         <Text style={styles.offering}>페인트</Text>
         <Text style={styles.timeAndLocation}>남양주시 - 25초전</Text> 
         <Text style={styles.price}>20,000</Text>
       </View>
       </View>
       <View style={styles.items}>
         <View>
       <Image style={styles.images} resizeMode="contain" source={require('./assets/images/paint.jpg')}></Image>
       </View>
       <View style={styles.textCon}>
         <Text style={styles.offering}>페인트</Text>
         <Text style={styles.timeAndLocation}>남양주시 - 25초전</Text> 
         <Text style={styles.price}>20,000</Text>
       </View>
       </View>
       <View style={styles.items}>
         <View>
       <Image style={styles.images} resizeMode="contain" source={require('./assets/images/paint.jpg')}></Image>
       </View>
       <View style={styles.textCon}>
         <Text style={styles.offering}>페인트</Text>
         <Text style={styles.timeAndLocation}>남양주시 - 25초전</Text> 
         <Text style={styles.price}>20,000</Text>
       </View>
       </View>
       <View style={styles.items}>
         <View>
       <Image style={styles.images} resizeMode="contain" source={require('./assets/images/paint.jpg')}></Image>
       </View>
       <View style={styles.textCon}>
         <Text style={styles.offering}>페인트</Text>
         <Text style={styles.timeAndLocation}>남양주시 - 25초전</Text> 
         <Text style={styles.price}>20,000</Text>
       </View>
       </View>
       <View style={styles.items}>
         <View>
       <Image style={styles.images} resizeMode="contain" source={require('./assets/images/paint.jpg')}></Image>
       </View>
       <View style={styles.textCon}>
         <Text style={styles.offering}>페인트</Text>
         <Text style={styles.timeAndLocation}>남양주시 - 25초전</Text> 
         <Text style={styles.price}>20,000</Text>
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
  flexDirection:"row",
  backgroundColor:"white",
  justifyContent:"space-between"
  
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
  height:120,
  width:120,
  borderRadius:10,
},
textCon: {
 marginLeft:10,
  
  
},
offering: {
  paddingTop:10,
  fontSize:25,
},
timeAndLocation: {
  marginTop:3,
},
price: {
  fontSize:25,
},
ham: {
 marginLeft:10,
 alignItems:"center",
 justifyContent:"center"
 
},
txham: {
  fontSize:30,
},
search:{
  marginLeft:290,
  marginRight:10,
  justifyContent:"center"
},
txSearch:{
  fontSize:30,
},
alert:{
   marginRight:20,
  justifyContent:"center",
},
txAlert: {
  fontSize:30,
}




});

export default App;
