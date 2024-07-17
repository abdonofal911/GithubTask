// FilterRow.js
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {fontScale, scale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const FilterRow = ({item, onPress, isDark}) => {
  return (
    <Pressable onPress={() => onPress(item)}>
      <Text style={isDark ? styles.filterTypeTextDark : styles.filterTypeText}>
        {item.label}
      </Text>
    </Pressable>
  );
};

export default FilterRow;
const styles = StyleSheet.create({
  filterTypeText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.black,
  },
  filterTypeTextDark: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.White,
  },
});
