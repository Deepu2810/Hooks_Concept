import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
function _Button(props) {
  const {
    height,
    width,
    backgroundColor,
    text,
    alignSelf,
    onButtonPress,
    style: propStyle,
  } = props;
  return (
    <TouchableOpacity
      style={[
        propStyle,
        {
          height: height,
          width: width,
          backgroundColor: backgroundColor,
          alignSelf: alignSelf,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        },
      ]}
      onPress={onButtonPress}>
      <Text style={{color: '#fff'}}>{text}</Text>
    </TouchableOpacity>
  );
}
export default _Button;
