import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import '../../tailwind.config';

export default My = () => {
  return (
    <View style={tw`flex flex-1 p-4 android:pt-2 bg-black dark:bg-black`}>
      <Text style={[{fontFamily:'Ubuntu-BoldItalic'},tw`text-white`]}>
        Hello world {'\n'}Welcome to Tailwind Css template in React Native
      </Text>
      <View></View>
    </View>
  );
};
