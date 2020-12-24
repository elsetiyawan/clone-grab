import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Navbar = () => {
  return (
    <View style={{height: 60, flexDirection: 'row'}}>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyling}
          source={require('../../assets/icon/home.png')}
        />
        <Text style={styles.textStyling}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyling}
          source={require('../../assets/icon/activity.png')}
        />
        <Text style={styles.textStyling}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyling}
          source={require('../../assets/icon/payment.png')}
        />
        <Text style={styles.textStyling}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyling}
          source={require('../../assets/icon/inbox.png')}
        />
        <Text style={styles.textStyling}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageStyling}
          source={require('../../assets/icon/account.png')}
        />
        <Text style={styles.textStyling}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    color: '#545454',
    fontSize: 10,
    marginTop: 4,
  },
  imageStyling: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default Navbar;
