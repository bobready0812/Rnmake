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
  <View style = {{flex:1, alignItems:"center", justifyContent:"center"}}>
    <Text>홈스크린 입니다.</Text>
    <Button title = "프로필 화면으로 이동" onPress={() => navigation.navigate('Profile')} />
  </View>
  )
} 

function ProfileScreen () {
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

        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>

    </NavigationContainer>
    
   
    
  );
}

const styles = StyleSheet.create({




});

export default App;
