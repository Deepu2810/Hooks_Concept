import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import _Button from '@_Button/_Button';
function ButtonScreen() {
  const [value, setValue] = useState('Press');
  function handleChange() {
    setValue('Pressed');
  }
  return (
    <_Button
      height={hp(7)}
      width={wp(30)}
      backgroundColor="#3b5998"
      text={value}
      alignSelf="center"
      onButtonPress={handleChange}
    />
  );
}
export default ButtonScreen;
