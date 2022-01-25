import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import _InputBox from '@_InputBox/_InputBox';
import _Button from '@_Button/_Button';
import {validateName} from '@values/validate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import realm from '@realmDB/realmDb';
import {useDispatch, useSelector} from 'react-redux';
import {getAppUpdateStatus} from '@home/homeAction';

let isValid;
const VALIDATE_USERFORM = {
  firstName: {
    ValidateKey: 'firstNameValid',
  },
  lastName: {
    ValidateKey: 'lastNameValid',
  },
};
function InputBox(props) {
  const dispatch = useDispatch();
  //Prefered
  useEffect(() => {
    const fetchData = async () => {
      let response = await AsyncStorage.getItem('fcmToken');
      console.warn('response--', response);
    };

    fetchData().catch(console.error);
  }, []);

  //Alternate Option
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await AsyncStorage.getItem('fcmToken');
  //     console.warn('response--', response);
  //   }
  //   fetchMyAPI();
  // }, []);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
  });

  const [validation, setValidation] = useState({
    firstNameValid: undefined,
    lastNameValid: undefined,
  });

  function handleChange() {
    // let dataPayload = {
    //   platform: 'android',
    //   app_type: 'b2c',
    //   app_version: '1.0.33',
    // };
    // dispatch(getAppUpdateStatus(dataPayload));
    // props.navigation.goBack();
    // props.navigation.goBack();
    // const fields = state;
    // const names = Object.keys(fields);
    // for (const name of names) {
    //   const validate = VALIDATE_USERFORM[name] || {};
    //   if (fields[name] == '') {
    //     // Empty
    //     setValidation({
    //       ...validation,
    //       [`${validate.ValidateKey}`]: true,
    //     });
    //   }
    // }
    if (state.firstName == '' && state.lastName == '') {
      setValidation({...validation, firstNameValid: true, lastNameValid: true});
    } else {
      console.warn('state.firstName', state.firstName);
      console.warn('state.lastName', state.lastName);
      realm.write(() => {
        realm.create(
          'User_Info',
          {
            first_name: state.firstName,
            last_name: state.lastName,
          },
          true, //for updating
        );
      });
    }
  }

  function onBlur(key, value, validateKey) {
    switch (key) {
      case 'FirstName':
        isValid = !validateName(value);
        break;

      case 'LastName':
        isValid = !validateName(value);
        break;

      default:
        break;
    }
    setValidation({
      ...validation,
      [`${validateKey}`]: isValid,
    });
  }
  const {firstName} = state;
  return (
    <View style={{alignSelf: 'center'}}>
      <_InputBox
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#000',
          padding: 0,
          width: wp(60),
          marginTop: hp(9),
        }}
        onChangeText={value => {
          setState({...state, firstName: value});
          setValidation({...validation, firstNameValid: undefined});
        }}
        value={firstName}
        validate={validation.firstNameValid}
        onBlur={() => onBlur('FirstName', firstName, 'firstNameValid')}
      />
      <_InputBox
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#000',
          padding: 0,
          width: wp(60),
          marginTop: hp(3),
        }}
        onChangeText={value => {
          setState({...state, lastName: value});
          setValidation({...validation, lastNameValid: undefined});
        }}
        value={state.lastName}
        validate={validation.lastNameValid}
        onBlur={() => onBlur('LastName', state.lastName, 'lastNameValid')}
      />

      <_Button
        style={{marginTop: hp(3)}}
        height={hp(7)}
        width={wp(30)}
        backgroundColor="#3b5998"
        text={'Submit'}
        alignSelf="center"
        onButtonPress={handleChange}
      />
    </View>
  );
}
export default InputBox;
// keyboardType="number-pad"
// maxLength={10}
// minLength={2}
// secureTextEntry={false}
// placeholder="Enter Text"
// editable={true}
