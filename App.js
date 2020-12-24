import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
// import MainMenu from './components/MainMenu';
import Navbar from './components/Navbar';
import PanelBar from './components/PanelBar';
import SearchBar from './components/SearchBar/Index';
import {green} from './config/config';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <SearchBar />
        <PanelBar />
        {/* <MainMenu /> */}
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default App;
