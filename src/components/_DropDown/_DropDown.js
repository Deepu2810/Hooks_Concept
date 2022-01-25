import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Keyboard} from 'react-native';

import IconDropDown from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconArrow from 'react-native-vector-icons/FontAwesome';
import DropDownStyles from '@_DropDown/dropDownStyles';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {dropDownView, textView, iconView} = DropDownStyles;
function _DropDown(props) {
  const {
    style: propStyle,
    name,
    onPress,
    textWidth,
    iconWidth,
    lightDropDownIcon,
    dropDownHeight,
    textMargin,
    heightZero,
    customDropDownIcon,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        propStyle,
        dropDownView,
        {height: dropDownHeight, flexDirection: 'row'},
      ]}>
      <View style={[textView, {width: textWidth ? textWidth : wp(65)}]}>
        <Text
          style={[
            {
              fontSize: 15,
              color: '#000',
              marginLeft: textMargin ? wp(0) : wp(5),
            },
          ]}>
          {name}
        </Text>
      </View>
      <View style={[iconView, {width: iconWidth ? iconWidth : wp(15)}]}>
        {customDropDownIcon ? (
          <TouchableOpacity
            onPress={onPress}
            style={[
              {
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#000',
                width: 24,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#red',
                backgroundColor: '#000',
              },
            ]}>
            <IconArrow name={'angle-down'} size={20} color={'#fff'} />
          </TouchableOpacity>
        ) : lightDropDownIcon ? (
          <IconEvil name={'chevron-down'} size={30} color={'#000'} />
        ) : (
          <IconDropDown name={'caret-down'} size={30} color={'#red'} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default _DropDown;
