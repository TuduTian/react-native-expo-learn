import {useNavigation} from '@react-navigation/native';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';

const Back = props => {
  const {showBack = true} = props;
  const navigation = useNavigation();
  if (!showBack) {
    return null;
  }

  const pressHandler = () => {
    if (typeof props.onPress === 'function') {
      props.onPress();
    }
    console.log(11111);
    navigation.goBack();
  };
  return (
    <View style={backStyle.index}>
      <TouchableNativeFeedback onPress={pressHandler}>
        <Text
          style={{
            fontFamily: 'iconfont',
            fontSize: global.font(40),
            color: '#000',
          }}>
          {'\ue600'}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const backStyle = StyleSheet.create({
  index: {
    paddingLeft: 10,
    position: 'absolute',
    left: 0,
    width: 40,
    flexDirection: 'row',
    top: Platform.OS == 'ios' ? 8 : 10,
    zIndex: 999,
  },
});

export default Back;
