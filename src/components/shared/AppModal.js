import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';

const AppModal = ({
  isVisible,
  onClose,
  children,
  modalCustomStyle,
  filterType,
  isDark,
}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View
          style={[
            isDark
              ? styles.modalInnerContainerDark
              : styles.modalInnerContainer,
            modalCustomStyle,
          ]}>
          <View style={styles.HeaderContainer}>
            <Text style={isDark ? styles.headerTextDark : styles.headerText}>
              {filterType}
            </Text>
            <Icon
              name="closecircle"
              size={19}
              style={styles.icon}
              onPress={onClose}
              color={isDark ? Colors.White : Colors.border}
            />
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  modalInnerContainer: {
    backgroundColor: Colors.White,
    width: scale(364),
    borderRadius: vScale(25),
  },
  modalInnerContainerDark: {
    backgroundColor: Colors.black,
    width: scale(364),
    borderRadius: vScale(25),
  },
  icon: {},
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(25),
    marginVertical: vScale(15),
  },
  headerText: {
    color: Colors.black,
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    marginBottom: vScale(10),
    marginTop: vScale(10),
  },
  headerTextDark: {
    color: Colors.White,
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    marginBottom: vScale(10),
    marginTop: vScale(10),
  },
});
