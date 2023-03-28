import React from "react"
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const User = () => {
  const navigation = useNavigation()
  const pressHandler = (path) => {
    navigation.navigate(path)
  }

  return (
    <View>
      <Button title="相机" onPress={()=>pressHandler('camera')} />
      <Button   title="从相册选择图片，回显出来" onPress={()=>pressHandler('photo')} />
      <Button   title="微信" onPress={()=>pressHandler('wechat')} />

    </View>
  )
}
export default User