import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyling}
        placeholder="Offers, food, and places to go"
      />
      <Image
        style={styles.imageStyling}
        source={require('../../assets/icon/scan.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyling: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: 27,
    left: 27,
  },
  textInputStyling: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 50,
  },
  container: {
    backgroundColor: '#34C173',
    padding: 15,
    position: 'relative',
  },
});
export default SearchBar;
