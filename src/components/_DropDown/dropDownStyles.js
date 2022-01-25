import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
  dropDownView: {
    borderRadius: 8,
  },
  dropDownHeight: {
    height: hp(6),
  },
  textView: {justifyContent: 'center'},
  iconView: {
    justifyContent: 'center',

    alignItems: 'center',
  },
  textMargin: {marginLeft: wp(5)},
};
