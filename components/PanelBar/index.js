import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {green} from '../../config/config';

const PanelBar = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.container}>
          <Text>Ovo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}>
          <Text>Hello, Ovo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: green,
    borderRightWidth: 0.5,
    borderRightColor: green,
    padding: 20,
  },
});
export default PanelBar;
