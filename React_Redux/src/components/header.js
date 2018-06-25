// src/components/header.js
// Import libraries
import React  from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
// สร้าง Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

Header.PropTypes = {
  headerText: PropTypes.string.isRequired
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// เปิดทางให้ component ตัวอื่นๆ สามารถนำ component ตัวนี้ ไปใช้งานได้
export default Header;