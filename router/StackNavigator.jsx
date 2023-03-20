import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import router from './index';
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {router.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            key={index}
            component={item.component}
            options={({ route }) => {
              const title =
                route.params?.title || item.title;
              return {
                header: () => {
                  return null;
                },
              };
            }}
          />
        );
      })}
    </Stack.Navigator>
  )
}
export default StackNavigator