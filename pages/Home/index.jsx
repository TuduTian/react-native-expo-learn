import React from "react"
import { View, Text, Button, Alert } from 'react-native'

const Home = () => {
  const clickHandler = () => {
    console.log('clickHandler')
  }
  return (
    <View>
      <Button onPress={clickHandler} title='click me' />
    </View>
  )
}

export default Home