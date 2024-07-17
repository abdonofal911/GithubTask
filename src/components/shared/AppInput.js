import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const AppInput = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  onBlur,
  errorMessage,
  onEndEditing,
  onFocus,
  autoCapitalize,
  placeholderTextColor,
  isDark,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth * 2,
          borderColor: isDark ? Colors.White : Colors.border,
          borderRadius: vScale(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingStart: scale(15),
          paddingVertical: vScale(2),
        }}>
        <TextInput
          {...{
            onChangeText,
            value,
            placeholder,
            secureTextEntry,
            onBlur,
            onEndEditing,
            onFocus,
            autoCapitalize,
            placeholderTextColor,
          }}
          style={styles.input}
          {...rest}
        />
        <EvilIcons
          name="search"
          size={30}
          color={isDark ? Colors.border : Colors.label}
          style={isDark ? styles.searchIconDark : styles.searchIcon}
        />
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(25),
  },
  label: {
    color: Colors.black,
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    marginBottom: vScale(10),
    marginTop: vScale(0),
  },
  labelDark: {
    color: Colors.White,
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    marginBottom: vScale(10),
    marginTop: vScale(0),
  },
  input: {},
  errorMessage: {
    fontFamily: Font.Light,
    color: Colors.red,
    fontSize: fontScale(12),
    marginTop: vScale(5),
  },
  searchIcon: {
    color: Colors.label,
    alignSelf: 'center',
    paddingHorizontal: scale(10),
  },
  searchIconDark: {
    color: Colors.border,
    alignSelf: 'center',
    paddingHorizontal: scale(10),
  },
});
