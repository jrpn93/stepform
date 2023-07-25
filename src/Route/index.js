import React from 'react';
import {View, Text, Image} from 'react-native';
import tw from 'twrnc';
import '../../tailwind.config';
import FastImage from 'react-native-fast-image';
import {Fonts, Images} from '../Assets/Constant';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/LayoutMesurement';
import helo from '../Assets/Images/bgsidebarmobile.png';

export default My = () => {
  return (
    <View style={tw`flex flex-1 bg-sky-100`}>
      <View style={tw`h-[150px]`}>
        <FastImage
          source={helo}
          style={tw`w-full h-full`}
          resizeMode="contain"
        />
      </View>
      <View
        style={tw`absolute self-center mt-4 flex flex-row justify-center gap-3 `}>
        <View
          style={tw`flex bg-blue-400 items-center h-9 w-9 rounded-full border border-white`}>
          <Text
            style={[
              tw`flex flex-1 font-bold text-xl text-black`,
              {textAlignVertical: 'center'},
            ]}>
            1
          </Text>
        </View>
        <View
          style={tw`flex items-center h-9 w-9 rounded-full border border-white `}>
          <Text
            style={[
              tw`flex flex-1 font-bold text-xl `,
              {textAlignVertical: 'center'},
            ]}>
            2
          </Text>
        </View>
        <View
          style={tw`flex items-center h-9 w-9 rounded-full border border-white`}>
          <Text
            style={[
              tw`flex flex-1 font-bold text-xl`,
              {textAlignVertical: 'center'},
            ]}>
            3
          </Text>
        </View>
        <View
          style={tw`flex items-center h-9 w-9 rounded-full border border-white`}>
          <Text
            style={[
              tw`flex flex-1 font-bold text-xl`,
              {textAlignVertical: 'center'},
            ]}>
            4
          </Text>
        </View>
      </View>
      <View
        style={tw`absolute my-22 mx-4.1 w-90 h-120 px-4 py-5 rounded-xl shadow-xl bg-white`}>
        <View>
          <Text style={[{fontFamily:Fonts.Ubuntu_Bold},tw`text-black text-7 `]}>Personal info</Text>
        </View>
      </View>
    </View>
  );
};
