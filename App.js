/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Configurations } from './src/Utilities/Configurations';
import { axiosConfig } from './src/Utilities/AxiosService';
import { Users } from './src/Screens/Users/Users';


function App() {
  const [showLoader, setShowLoader] = useState(true)
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {

    setTimeout(() => {
      setShowLoader(false)
    }, 500)


    Configurations.init({
      axiosConfig: axiosConfig,
    });
  }, []);

  return (
    <SafeAreaView 
    style={styles.container}
    >
      {!showLoader && <Users />}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#ffffff',
      marginVertical: 20
  },

});


export default App;
