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
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import realm from '@realmDB/realmDb';
import {useDispatch, useSelector} from 'react-redux';
import homeReducer from '@home/homeReducer';
import {getAppUpdateStatus} from '@home/homeAction';
const resetScreen = CommonActions.reset({
  index: 0,
  routes: [{name: 'InputBox'}],
});
function Home(props) {
  const {
    appUpdateStatusPostFetching,
    appUpdateStatusPostSuccess,
    appUpdateStatusPostError,
    appUpdateStatusPostErrorMessage,
    appUpdateStatusPostUpdate,
  } = useSelector(({homeReducer}) => homeReducer);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   AsyncStorage.setItem('fcmToken', 'Deepak');
  //   const fetchData = async () => {
  //     let User_Info = await realm.objects('User_Info');
  //     if (User_Info.length > 0) {
  //       console.warn('Data response--', User_Info);
  //     } else {
  //       console.warn('Null response--', User_Info);
  //     }
  //   };
  //   fetchData().catch(console.error);
  // }, []);

  useEffect(() => {
    // console.warn('Deepak11');
    let dataPayload = {
      platform: 'android',
      app_type: 'b2c',
      app_version: '1.0.34',
    };
    dispatch(getAppUpdateStatus(dataPayload));
  }, []);

  useEffect(() => {
    // console.warn('Deepak ---++');
  }, [appUpdateStatusPostUpdate]);

  async function deleteRealmData() {
    let User_Info = await realm.objects('User_Info');

    realm.write(() => {
      realm.delete(User_Info);
    });
  }

  // 1St
  // const [count, setCount] = useState(0);

  // 2nd
  // const initialValues = {
  //   phone: '123',
  //   email: 'dee',
  // };
  // const [state, setState] = useState({
  //   order: 'Sample1',
  //   paid: 'false',
  //   submitting: 'false',
  //   loading: 'false',
  //   data: initialValues,
  // });

  return (
    <View>
      {appUpdateStatusPostFetching && (
        <View
          style={{
            height: hp(100),
            width: wp(100),
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            position: 'absolute',
            zIndex: 1,
            marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
          }}>
          <ActivityIndicator color={'red'} animating={true} size="large" />
        </View>
      )}

      <TouchableOpacity
        // onPress={deleteRealmData}
        onPress={() => props.navigation.navigate('InputBox')}
        // onPress={() => props.navigation.dispatch(resetScreen)}
        // 1st
        // onPress={() => setCount(count + 1)}

        // 2nd
        // onPress={() =>
        //   setState({
        //     ...state,
        //     paid: 'true',
        //     order: 'sample2',
        //   })
        // }

        style={{
          height: hp(7),
          width: wp(30),
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          alignSelf: 'center',
          marginTop: hp(5),
        }}>
        <Text>Deepak Anthati ---</Text>
        {/* <Text>{appUpdateStatusPostUpdate}</Text> */}

        {/* 1st */}
        {/* <Text>Count: {count}</Text> */}

        {/* 2nd */}
        {/* <Text>Paid: {state.paid}</Text> */}
      </TouchableOpacity>
    </View>
  );
}
export default Home;
// useEffect(() => {
//   if(productId && productId !=="") fetchProductDetail();
//   return () => {
//       dispatch(removeSelectedProduct())
//   }
// }, [productId]);

{
  /* <Stack.Screen
name="Home"
component={HomeScreen}
headerMode="screen"
screenOptions={{
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'tomato' },
}}
options={{
  title: 'Home',              
}}
/> */
}
