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
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
 
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { theme } from './Color';


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const STORAGE_KEY = "@toDos"

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    loadToDos();
  }, []);
  

  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const saveToDos = async(toSave) => {
    const s = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_KEY, s);
  }

const loadToDos = async() =>{
 const s = await AsyncStorage.getItem(STORAGE_KEY);
 setToDos(JSON.parse(s));
}


  const addToDo = async() => { 
    if (text === "") {
      return
    }
    
    const newToDos = {
      ...toDos, 
      [Date.now()]: {text, working}
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
    
  }

  const deleteTodo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      {text:"Cancle"},
      {text: "I'm sure", onPress: async() => {
        const newToDos = {...toDos}
        delete newToDos[key]; 
        setToDos(newToDos);
        await saveToDos(newToDos);
      }}
    ]);
    
    return;
   
  }
   

  return (
    
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
        <Text style={{...styles.btnText, color: working? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
        <Text style={{...styles.btnText, color: !working? "white" : theme.grey }}>Travel </Text>
        </TouchableOpacity>
      </View>
      
      <TextInput 
        onSubmitEditing={addToDo}
        onChangeText={onChangeText} 
        value={text}
        returnKeyType="done"
        placeholder={working? "Add a To Do" : "Where do you want to go?"} 
        style={styles.input} />


      <ScrollView>{Object.keys(toDos).map((key) => (toDos[key].working === working? <View style={styles.toDoIt} key={key}>
        <Text style={styles.toDoText}>{toDos[key].text}</Text>
        <TouchableOpacity onPress={() => deleteTodo(key)}> 
           <Text>❌</Text>
        </TouchableOpacity>
      </View> : null ))}</ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: theme.bg,
  paddingHorizontal: 20,
  
}  ,
header: {
  justifyContent:"space-between",
  flexDirection:"row",
  marginTop: 100,
  
} ,
btnText: {
  
  fontSize: 44,
  fontWeight:"600",
  
},
input: {
  backgroundColor:"white",
  paddingHorizontal:20,
  borderRadius: 30,
  marginVertical: 10,
  fontSize:18,
},
toDoIt: {
  backgroundColor:theme.grey, 
  marginBottom: 10,
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 15,
  flexDirection: "row",
  alignItems:"center",
  justifyContent:"space-between",



},
toDoText: {
  fontSize: 16,
  color:"#fff",
}

});

export default App;
