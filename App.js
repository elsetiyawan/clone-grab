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
import Ads from './components/Ads';
import MainMenu from './components/MainMenu';
import Navbar from './components/Navbar';
import PanelBar from './components/PanelBar';
import SearchBar from './components/SearchBar/Index';
import TopUpWallet from './components/TopUpWallet';
import {green} from './config/config';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: green}}>
      <ScrollView>
        <SearchBar />
        <PanelBar />
        <MainMenu />
        <Ads />
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default App;
