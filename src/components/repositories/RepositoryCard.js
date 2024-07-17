import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const RepositoryCard = ({item, isDark}) => {
  return (
    <View>
      <View style={isDark ? styles.containerDark : styles.container}>
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
            {/* <Text style={styles.footerText}>Updated 12 hours ago</Text> */}
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              {item.language}
            </Text>
            <AntDesign name="staro" size={12} color={Colors.green2} />
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              {item.stargazers_count}
            </Text>
            <AntDesign name="fork" size={12} color={Colors.green2} />
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              {item.forks_count}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryCard;

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
  starText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.black,
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
    backgroundColor: Colors.lightGreen,
    paddingHorizontal: scale(6),
    paddingVertical: scale(4),
    borderRadius: vScale(8),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
