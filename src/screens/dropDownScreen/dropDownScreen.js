import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import _DropDown from '@_DropDown/_DropDown';
function DropDownScreen(props) {
  function handleOnPress() {
    console.warn('Pressed');
  }
  return (
    <View style={{alignSelf: 'center', marginTop: hp(5)}}>
      <_DropDown
        // customDropDownIcon
        style={[
          {
            width: wp(90),
            borderColor: '#000',
            borderWidth: wp(0.5),
          },
        ]}
        textWidth={wp(75)}
        iconWidth={wp(15)}
        // textMargin
        name={'Deepak'}
        onPress={handleOnPress}
      />
    </View>
  );
}
export default DropDownScreen;
