import React, {useState} from 'react';
import {View, NativeModules, StatusBar} from 'react-native';
import Nav from '../widgets/nav';
const {StatusBarManager} = NativeModules;
const Layout: {
  HomeLayout?: any;
} = {};

//主页布局
Layout.HomeLayout = props => {
  const {showTitle = true} = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tabBarHeight, setTabBarHeight] = useState(StatusBar.currentHeight);

  if (global.isIOS) {
    StatusBarManager.getHeight(statusBarHeight => {
      setTabBarHeight(statusBarHeight.height);
    });
  }
  return (
    <>
      <Nav.TabHead {...props} tabBarHeight={tabBarHeight} />
      {showTitle ? (
        <View style={{height: (tabBarHeight as number) + 40}} />
      ) : null}
      {props.children}
    </>
  );
};
export default Layout;
