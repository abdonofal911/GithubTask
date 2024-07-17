import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../themes/Colors';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import {
  AppModal,
  ContainerView,
  Filter,
  ModalData,
} from '../../components/shared';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {ExploreCard} from '../../components/explore';
import {countView} from '../../dummyData';
import {getTopRepositories} from '../../actions/repositories';

const Explore = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch();
  const {topRepositories, getTopRepositoriesLoader} = useSelector(
    state => state.repositories,
  );
  const [selectedFilter, setSelectedFilter] = useState({
    id: 1,
    label: 'Top 10',
    count: 10,
  });
  useEffect(() => {
    dispatch(getTopRepositories(selectedFilter.count));
  }, [selectedFilter.count]);

  const Repos = topRepositories;

  const [showModal, setShowModal] = useState(false);

  const handleFilterSelection = selectedFilter => {
    setSelectedFilter(selectedFilter);
    setShowModal(false);
  };
  return (
    <View style={isDarkMode ? styles.containerDark : styles.container}>
      <ContainerView>
        <Text style={isDarkMode ? styles.headerTextDark : styles.headerText}>
          Explore popular
        </Text>
        <View style={styles.filterContainer}>
          <Filter
            isDark={isDarkMode}
            filterType="View"
            onPress={() => setShowModal(true)}
            filter={selectedFilter.label}
          />
        </View>
        {getTopRepositoriesLoader ? (
          <ActivityIndicator
            color={isDarkMode ? Colors.green : Colors.mainColor}
            size={'large'}
            style={{marginTop: scale(50)}}
          />
        ) : (
          <FlatList
            scrollEnabled={false}
            data={Repos}
            renderItem={({item}) => (
              <ExploreCard item={item} isDark={isDarkMode} />
            )}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{
              marginVertical: vScale(15),
              alignItems: 'center',
            }}
            ItemSeparatorComponent={() => <View style={{height: vScale(20)}} />}
          />
        )}
      </ContainerView>
      <AppModal
        isDark={isDarkMode}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        filterType="Choose the Count">
        <ModalData
          isDark={isDarkMode}
          filterData={countView}
          onSelectedFilter={item => handleFilterSelection(item)}
        />
      </AppModal>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkWhite,
    flex: 1,
  },
  containerDark: {
    backgroundColor: Colors.blackDark,
    flex: 1,
  },
  headerText: {
    color: Colors.black,
    fontSize: fontScale(20),
    fontFamily: Font.Medium,
    paddingVertical: vScale(35),
    marginHorizontal: scale(25),
  },
  headerTextDark: {
    color: Colors.White,
    fontSize: fontScale(20),
    fontFamily: Font.Medium,
    paddingVertical: vScale(35),
    marginHorizontal: scale(25),
  },
  filterContainer: {
    marginStart: scale(25),
    flexDirection: 'row',
  },
});
