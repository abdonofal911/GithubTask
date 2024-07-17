import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const ExploreCard = ({item, isDark}) => {
  return (
    <View>
      {/* <Image
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:840/1*b21FyqUbowHYAOQDXH0tDw.jpeg',
        }}
        style={styles.banner}
      /> */}
      <View style={isDark ? styles.containerDark : styles.container}>
        <View style={styles.headerContainer}>
          <Text style={isDark ? styles.tendingDark : styles.tending}>
            Trending repository
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable
              style={styles.starRow}
              onPress={() => console.log('Star')}>
              <AntDesign name="staro" size={scale(18)} color={Colors.green2} />
              <Text style={isDark ? styles.starTextDark : styles.starText}>
                Star
              </Text>
            </Pressable>
            <Text
              style={isDark ? styles.countStarTextDark : styles.countStarText}>
              {item.stargazers_count}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.titleRow}>
            <AntDesign name="book" size={16} color={Colors.green2} />
            <Text style={isDark ? styles.titleTextDark : styles.titleText}>
              {item.full_name}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: Colors.label,
              borderBottomWidth: StyleSheet.hairlineWidth,
              paddingBottom: vScale(20),
            }}>
            <Text style={isDark ? styles.descriptionDark : styles.description}>
              {item.description}
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              Updated {item.updated_at.slice(0, 10)}
            </Text>
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              {item.language}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    width: scale(358),
    borderRadius: vScale(6),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
    paddingHorizontal: scale(22),
    paddingBottom: vScale(23),
    paddingTop: vScale(18),
  },
  containerDark: {
    backgroundColor: Colors.black,
    width: scale(358),
    borderRadius: vScale(6),
    shadowColor: Colors.darkWhite,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
    paddingHorizontal: scale(22),
    paddingBottom: vScale(23),
    paddingTop: vScale(18),
  },
  banner: {
    height: vScale(163),
    width: scale(358),
    borderRadius: vScale(6),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tending: {
    fontFamily: Font.Regular,
    fontSize: fontScale(12),
    color: Colors.label,
    textAlign: 'center',
  },
  tendingDark: {
    fontFamily: Font.Regular,
    fontSize: fontScale(12),
    color: Colors.White,
    textAlign: 'center',
  },
  starText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(14),
    color: Colors.black,
    marginHorizontal: scale(10),
  },
  starTextDark: {
    fontFamily: Font.Medium,
    fontSize: fontScale(14),
    color: Colors.White,
    marginHorizontal: scale(10),
  },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countStarText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.mainColor,
    textAlign: 'center',
    backgroundColor: Colors.lightMain,
    paddingHorizontal: scale(6),
    paddingVertical: scale(4),
    borderRadius: vScale(4),
    overflow: 'hidden',
  },
  countStarTextDark: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.green,
    textAlign: 'center',
    backgroundColor: Colors.lightGreen,
    paddingHorizontal: scale(6),
    paddingVertical: scale(4),
    borderRadius: vScale(4),
    overflow: 'hidden',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vScale(20),
    marginBottom: vScale(15),
  },
  titleText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    color: Colors.mainColor,
    marginStart: scale(13),
  },
  titleTextDark: {
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    color: Colors.White,
    marginStart: scale(13),
  },
  description: {
    color: Colors.black,
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
  },
  descriptionDark: {
    color: Colors.White,
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(20),
  },
  footerText: {
    fontSize: fontScale(12),
    color: Colors.black,
    fontFamily: Font.Regular,
    paddingEnd: scale(44),
    paddingStart: scale(4),
  },
  footerTextDark: {
    fontSize: fontScale(12),
    color: Colors.White,
    fontFamily: Font.Regular,
    paddingEnd: scale(44),
    paddingStart: scale(4),
  },
});
