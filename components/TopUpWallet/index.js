import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {green} from '../../config/config';

const TopUpWallet = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../../assets/icon/payment.png')}
          style={styles.buttonIcon}
        />
        <Text style={styles.textStyling}>Top up </Text>
        <Text>Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    alignItems: 'center',
  },
  buttonIcon: {
    width: 23,
    height: 23,
    marginRight: 5,
  },
  button: {
    borderRadius: 5,
    shadowColor: green,
    shadowOffset: {height: 4, width: 4},
    shadowOpacity: 1,
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 5, // Android
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyling: {
    fontWeight: 'bold',
  },
});
export default TopUpWallet;
