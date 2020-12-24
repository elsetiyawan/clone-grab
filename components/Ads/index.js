import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import TopUpWallet from '../TopUpWallet';

const Ads = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.imageStyling}
        source={require('../../assets/image/ads.jpg')}
      />
      <Text style={styles.textStyling}>
        PUAS Akhir Tahun Pesan Sekarang! Hemat 50%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    marginTop: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  imageStyling: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  textStyling: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
  },
});
export default Ads;
