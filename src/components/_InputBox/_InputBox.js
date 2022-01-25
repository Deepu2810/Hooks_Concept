import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
function _InputBox(props) {
  const {
    value,
    onChangeText,
    keyboardType,
    maxLength,
    minLength,
    secureTextEntry,
    placeholder,
    editable,
    onBlur,
    autoComplete,
    style: propTextBoxStyle,
    validate,
    successColor,
  } = props;
  return (
    <View>
      <TextInput
        style={[propTextBoxStyle]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        minLength={minLength}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        editable={editable}
        onBlur={onBlur}
        // borderWidth={0}
        autoComplete={autoComplete}
      />
      {validate && (
        <Text
          style={{
            color: successColor ? '#28a745' : '#F90000',
            marginLeft: wp(10),
          }}>
          Enter Text
        </Text>
      )}
    </View>
  );
}
export default _InputBox;
