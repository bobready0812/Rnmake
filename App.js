/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addToDo = () => {
    if (text === "") {
      alert("nothing!");
    }
    
    const newToDos = {...toDos, [Date.now()]: {text, work:working}};
    setToDos(newToDos);
    setText("");
    
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
        returnKeyType="done"
        value={text}
        placeholder={working? "Add a To Do" : "Where Do You want to go?"} 
        style={styles.input}></TextInput>
      <ScrollView>
        {Object.keys(toDos).map((key) => <View styles={styles.toDo} key={key}>
          <Text styles={styles.toDoText}>{toDos[key].text}</Text>
        </View>)}
      </ScrollView>
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
  marginTop: 10,
  fontSize:18,
},
toDo: {
  backgroundColor:theme.toDoBg,
  marginBottom:10,
  paddingVertical:20,
  paddingHorizontal:40,
  borderRadius:15,
},
toDoText: {
  fontSize: 16,
  color:"#fff",
}

});

export default App;
