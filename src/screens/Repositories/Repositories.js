import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRepositories} from '../../actions/repositories';

import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import {RepositoryCard} from '../../components/repositories';
import {
  AppModal,
  ContainerView,
  Filter,
  ModalData,
  CustomDatePicker,
} from '../../components/shared';
import {languageView} from '../../dummyData';

const Repositories = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date('2024-01-01'));
  const [open, setOpen] = useState(false);
  const {repositories, getRepositoriesLoader} = useSelector(
    state => state.repositories,
  );
  const [language, setLanguage] = useState('any');

  useEffect(() => {
    dispatch(getRepositories(date, ''));
  }, []);
  useEffect(() => {
    dispatch(getRepositories(date, language));
  }, [date, language]);

  const Repos = [...repositories];

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={isDarkMode ? styles.containerDark : styles.container}>
      <ContainerView>
        <Text style={isDarkMode ? styles.headerTextDark : styles.headerText}>
          Repositories
        </Text>

        <View style={styles.filterContainer}>
          <Filter
            filterType="Language"
            onPress={() => setShowModal(true)}
            filter={language}
            isDark={isDarkMode}
          />
          <Filter
            filterType="Date"
            onPress={() => setOpen(true)}
            filter={date.toISOString().split('T')[0]}
            isDark={isDarkMode}
          />
        </View>
        {getRepositoriesLoader ? (
          <ActivityIndicator
            color={isDarkMode ? Colors.green : Colors.mainColor}
            size={'large'}
            style={{marginTop: scale(50)}}
          />
        ) : (
          <FlatList
            scrollEnabled={false}
            data={Repos.reverse()}
            renderItem={({item}) => (
              <RepositoryCard item={item} isDark={isDarkMode} />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              marginVertical: vScale(15),
              alignItems: 'center',
            }}
            ItemSeparatorComponent={() => <View style={{height: vScale(20)}} />}
          />
        )}
      </ContainerView>
      <AppModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        isDark={isDarkMode}
        filterType="Choose the Language">
        <ModalData
          isDark={isDarkMode}
          filterData={languageView}
          onSelectedFilter={item => (
            setLanguage(item.label), setShowModal(false)
          )}
        />
      </AppModal>
      <CustomDatePicker
        isOpen={open}
        setIsOpen={setOpen}
        date={date}
        setDate={setDate}
        onConfirm={date => {
          setDate(new Date(date));

          setOpen(false);
        }}
      />
    </View>
  );
};

export default Repositories;

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
    paddingStart: scale(25),
  },
  headerTextDark: {
    color: Colors.White,
    fontSize: fontScale(20),
    fontFamily: Font.Medium,
    paddingVertical: vScale(35),
    paddingStart: scale(25),
  },
  filterContainer: {
    marginHorizontal: scale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
