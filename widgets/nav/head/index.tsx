import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, Platform} from 'react-native';
import Back from '../back';
const NAV_BAR_HEIGHT = 40;
const TabHead = props => {
  /**
   * title 标题
   * showBack 是否展示返回按钮
   * opacity ：透明度
   * titleBarHeight : 标题栏高度
   * showTitle： 是否直接就展示标题栏 意思就是不沉浸式 默认为不沉浸式
   */
  const {
    title,
    showBack = false,
    opacity = 1,
    titleBarHeight = 30,
    showTitle = true,
    tabBarHeight,
  } = props;
  const backgroundColor = `rgba(255, 255, 255, ${opacity})`;
  const color = `rgba(0, 0, 0, ${opacity})`;

  return (
    <View
      style={[
        {
          height: NAV_BAR_HEIGHT + tabBarHeight,
        },
        TitleStyle.titleBarWrapper,
      ]}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={opacity ? 'dark-content' : 'light-content'}
        hidden={false}
      />
      <View
        style={[
          TitleStyle.titleBarBg,
          {
            opacity: opacity,
          },
        ]}
      />
      <View
        style={[
          TitleStyle.titleBarContent,
          {
            marginTop: tabBarHeight,
            height: NAV_BAR_HEIGHT,
          },
        ]}>
        <Back showBack={showBack} />
        <Text style={{color: color, fontSize: global.font(18)}}>{title}</Text>
      </View>
    </View>
  );
};
const TitleStyle = StyleSheet.create({
  titleBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    zIndex: 100,
    width: '100%',
  },
  titleBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
  },
  titleBarBg: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default TabHead;
