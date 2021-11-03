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
     <View>
       <TouchableOpacity onPress={() => navigation.navigate('AddItems')}>
         <Text>상품 추가하기</Text>
       </TouchableOpacity>
     </View>
    </View>
    <View style={styles.footer}>
     <View style={styles.homeBtn}>
        <TouchableOpacity>
          <Text style={{fontSize:20, color:"black"}}>홈</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.chatBtn}>
       <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
         <Text style={{fontSize:20, color:"white"}}>채팅</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.myPageBtn}>
       <TouchableOpacity onPress={() => navigation.navigate('MyPage')} >
         <Text style={{fontSize:20, color:"white"}}>마이 페이지</Text>
       </TouchableOpacity>
     </View>

    </View>
  </View>
  )
} 

function ChatScreen ({navigation}) {
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
       <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
         <Text style={{fontSize:20, color:"black"}}>채팅</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.myPageBtn}>
       <TouchableOpacity onPress={() => navigation.navigate('MyPage')} >
         <Text style={{fontSize:20, color:"white"}}>마이 페이지</Text>
       </TouchableOpacity>
     </View>

    </View>
  </View>
  )
} 


function MyPage ({navigation}) {
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
       <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
         <Text style={{fontSize:20, color:"white"}}>채팅</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.myPageBtn}>
       <TouchableOpacity onPress={() => navigation.navigate('MyPage')} >
         <Text style={{fontSize:20, color:"black"}}>마이 페이지</Text>
       </TouchableOpacity>
     </View>

    </View>
  </View>
  )
} 





function AddItems ({navigation}) {
  const [itemName, setItemName] = useState("")
  const [price, setPrice] = useState("")
  const [content, setContent] = useState("") 
  const [itemResult, setItemResult] = useState({})
  
  
  function onChangeItemName(items) {
    setItemName(items);
    
   }
   
   function onChangePrice(prices) {
     setPrice(prices);
   }
   
   function onChangeContent(contents) {
     setContent(contents);
   }

   function submitMyItem () {
     setItemResult({[Date.now()]:{itemName, price, content}})
     console.log(itemResult);
     
   }

  return(
 <View style={{flex:1}}>
 <View style={{flex:1, backgroundColor: "skyblue"}}>
  
 </View>
 <View style={{flex:1, backgroundColor:"#FFFFCC"}}>
 <TextInput onChangeText={onChangeItemName} value={itemName}></TextInput>
 </View>
 <View style={{flex:1, backgroundColor: "skyblue"}}>
 
 </View>
 <View style={{flex:1, backgroundColor:"#FFFFCC"}}>
 <TextInput onChangeText={onChangePrice} value={price}></TextInput>
 </View>
 <View style={{flex:1, backgroundColor: "skyblue"}}>
 <TextInput onChangeText={onChangeContent} value={content}></TextInput>
 <TouchableOpacity onPress={submitMyItem}>
   <Text>제출</Text>
 </TouchableOpacity>
 </View>
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
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="AddItems" component={AddItems} />
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
