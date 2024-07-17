import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../themes/Colors';
import {scale, vScale} from '../../themes/Scale';
import {IMAGES} from '../../assets/images';
const SearchButton = ({isDark}) => {
  return (
    <Pressable
      onPress={() => console.log('Search Button Pressed')}
      style={isDark ? styles.containerDark : styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Image
        source={isDark ? IMAGES.darkLogo : IMAGES.lightLogo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Feather
        name="search"
        color={isDark ? Colors.White : Colors.black}
        size={scale(25)}
      />
    </Pressable>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: vScale(25),
    paddingTop: vScale(80),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
  },
  containerDark: {
    // top: -60,
    paddingVertical: vScale(25),
    paddingTop: vScale(50),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.black,
    paddingTop: vScale(80),
  },
  logo: {
    width: scale(112),
    height: vScale(24),
  },
});
