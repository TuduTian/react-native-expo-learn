import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //底部tabs
import ButtonConfig from './buttom_nav';
import { Text, Platform } from 'react-native'
const ButtonNav = createBottomTabNavigator(); // 底部导航
const ButtonNavigator = () => {
  return (
    <ButtonNav.Navigator
      screenOptions={({ route }) => (
        {
          tabBarIcon: ({ focused, color, size }) => {
            let fcolor = focused ? 'pink' : '#333';
            return (
              <Text
                style={{
                  fontFamily: 'iconfont',
                  color: fcolor,
                  fontSize: 24,
                }}>
                {ButtonConfig.map(item => {
                  if (item.name == route.name) {
                    return (
                      <Text
                        key={item.name}
                        style={{
                          fontFamily: 'iconfont ',
                          fontSize: 26,
                        }}>
                        {Platform.OS != 'web' ? item.iconfont : item.webIcon}
                      </Text>
                    );
                  }
                })}
              </Text>
            );
          },
          tabBarLabelStyle: 20,
          tabBarActiveTintColor: 'pink', // 激活时的颜色
          tabBarInactiveTintColor: '#333', // 未激活时的颜色
          headerShown: false,
        }
      )}
    >
      {ButtonConfig.map(item => (
        <ButtonNav.Screen
          key={item.key}
          name={item.name}
          component={item.component}
        />
      ))}
    </ButtonNav.Navigator>
  )
}

export default ButtonNavigator