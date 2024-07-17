import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';

const Filter = ({onPress, filter, filterType, isDark}) => {
  return (
    <Pressable
      style={isDark ? styles.containerDark : styles.container}
      onPress={onPress}>
      <Text style={isDark ? styles.filterTypeDark : styles.filterType}>
        {filterType} :{' '}
      </Text>
      <Text
        style={
          isDark ? styles.selectedFilterTypeDark : styles.selectedFilterType
        }>
        {filter}
      </Text>
      <AntDesign
        size={18}
        name="down"
        color={isDark ? Colors.White : Colors.black}
      />
    </Pressable>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.White,
    paddingVertical: vScale(12),
    paddingHorizontal: scale(12),
    borderRadius: vScale(6),
    // width: scale(160),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
  },
  containerDark: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.black,
    paddingVertical: vScale(12),
    paddingHorizontal: scale(12),
    borderRadius: vScale(6),
    // width: scale(160),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
  },
  filterType: {
    fontSize: fontScale(14),
    color: Colors.label,
    fontFamily: Font.Regular,
  },
  filterTypeDark: {
    fontSize: fontScale(14),
    color: Colors.White,
    fontFamily: Font.Regular,
  },
  selectedFilterType: {
    fontSize: fontScale(14),
    color: Colors.black,
    fontFamily: Font.Regular,
    paddingEnd: scale(5),
  },
  selectedFilterTypeDark: {
    fontSize: fontScale(14),
    color: Colors.White,
    fontFamily: Font.Regular,
    paddingEnd: scale(5),
  },
});
