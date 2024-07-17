import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {SearchButton} from './src/components/shared';
import Navigator from './src/navigation';
import {scale, vScale} from './src/themes/Scale';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      {/* <SafeAreaView /> */}
      <SearchButton isDark={isDarkMode} />
      <Navigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
