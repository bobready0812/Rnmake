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
  <View style={styles.header}>
    <View>

    </View>
    <View>

    </View>
    <View>
      
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
header:{
  flex:1,
  backgroundColor:"red",

}



});

export default App;
