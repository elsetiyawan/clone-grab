import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {green} from '../../config/config';

const PanelBar = () => {
  return (
    <>
      <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
        <TouchableOpacity style={styles.containerLeft}>
          <View style={styles.roundFrame}>
            <Image
              style={styles.imageStyling}
              source={require('../../assets/icon/ovo.png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.currency}>IDR</Text>
            <Text style={styles.money}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerRight}>
          <View style={styles.roundFrame}>
            <Image
              style={styles.imageStyling}
              source={require('../../assets/icon/crown.png')}
            />
          </View>
          <Text style={styles.greeting}>Hello, Ovo P...</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerLeft: {
    flex: 1,
    borderRightWidth: 0.5,
    borderRightColor: green,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyling: {
    width: 20,
    height: 10,
  },
  roundFrame: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#d8d8d8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 7,
  },
  currency: {
    color: '#d8d8d8',
  },
  money: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
  greeting: {
    fontSize: 17,
    marginLeft: 7,
  }
});
export default PanelBar;
