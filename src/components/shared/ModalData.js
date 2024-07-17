import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import AppInput from './AppInput';
import FilterRow from './FilterRow';

const ModalData = ({label, filterData, onSelectedFilter, isDark}) => {
  const handleFilterSelection = selectedFilter => {
    onSelectedFilter(selectedFilter);
  };
  return (
    <View style={styles.container}>
      <AppInput
        isDark={isDark}
        label={label}
        placeholder="Filter Type"
        placeholderTextColor={isDark ? Colors.White : Colors.label}
      />
      <FlatList
        scrollEnabled={false}
        data={filterData}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <FilterRow
            item={item}
            onPress={() => handleFilterSelection(item)}
            isDark={isDark}
          />
        )}
        ItemSeparatorComponent={() => <View style={{height: scale(30)}} />}
        contentContainerStyle={{
          paddingHorizontal: scale(30),
          paddingVertical: scale(25),
        }}
      />
    </View>
  );
};

export default ModalData;

const styles = StyleSheet.create({
  container: {},
  filterTypeText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.black,
    padding: scale(25),
  },
  filterTypeTextDark: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.White,
    padding: scale(25),
  },
});
