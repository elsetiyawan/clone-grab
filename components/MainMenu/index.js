import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import TopUpWallet from '../TopUpWallet';

const MainMenu = () => {
  return (
    <View style={styles.mainContainer}>
      <TopUpWallet />
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/food.png')}
              />
            </View>
            <Text style={styles.textStyling}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/express.png')}
              />
            </View>
            <Text style={styles.textStyling}>Express</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/mart.png')}
              />
            </View>
            <Text style={styles.textStyling}>Mart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/pulsa.png')}
              />
            </View>
            <Text style={styles.textStyling}>Pulsa/Token</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 18,
          }}>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/car.png')}
              />
            </View>
            <Text style={styles.textStyling}>Car</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/bike.png')}
              />
            </View>
            <Text style={styles.textStyling}>Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/insurance.png')}
              />
            </View>
            <Text style={styles.textStyling}>Insurance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.imageStyling}
                source={require('../../assets/icon/more.png')}
              />
            </View>
            <Text style={styles.textStyling}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    marginTop: 0.5,
    paddingHorizontal: 10,
    paddingBottom: 40,
  },
  textStyling: {
    color: '#545454',
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },
  imageStyling: {
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    backgroundColor: '#e2f6e5',
    borderRadius: 50,
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MainMenu;
