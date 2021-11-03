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
function HomeScreen ({navigation}) {
  return(
  <View style={styles.container}>
    <View style={styles.header}>

    </View>
    <View style={styles.body}>

    </View>
    <View style={styles.footer}>
     <View style={styles.homeBtn}>
        <TouchableOpacity>
          <Text style={{fontSize:20, color:"white"}}>홈</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.chatBtn}>
       <TouchableOpacity>
         <Text style={{fontSize:20, color:"white"}}>채팅</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.myPageBtn}>
       <TouchableOpacity>
         <Text style={{fontSize:20, color:"white"}}>마이 페이지</Text>
       </TouchableOpacity>
     </View>

    </View>
  </View>
  )
} 

function ChatScreen () {
  return(
  <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
    <Text>프로필 스크린 입니다.</Text>
  </View>
  )
} 

const App: () => Node = () => {
 
 
   

  
   

  return (
    
  //  <View style={ { flex:1,alignItems:"center", justifyContent:"center" }}> 
  //    <Text>네비게이터</Text>
  //  </View>
    <NavigationContainer>

        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Home"
          
          component={HomeScreen}
         
        />

        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>

    </NavigationContainer>
    
   
    
  );
}

const styles = StyleSheet.create({
 
 container: {
   flex:1,
   
 }
  , 
header:{
  flex:0.08,
  backgroundColor:"white",

},
body: {
  flex:1,
  backgroundColor:"#FFFFCC"
},
footer: {
  flex:0.08,
  backgroundColor: "skyblue",
  flexDirection:"row"

},
homeBtn: {
  flex:1,
  alignItems:"center",
  justifyContent:"center",
},
chatBtn: {
  flex:1,
  alignItems:"center",
  justifyContent:"center",
},
myPageBtn: {
  flex:1,
  alignItems:"center",
  justifyContent:"center",
}




});

export default App;
