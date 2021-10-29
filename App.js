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
  TextInput
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
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
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
      <View>
        <TextInput style={styles.}/>
      </View>
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
  
}

});

export default App;
