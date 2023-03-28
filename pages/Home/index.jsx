import React from "react"
import { View, Text, Button, Alert } from 'react-native'
import Layout from "../../layout/Layout"
import { $getUserInfo } from '../../api/apis/user'
const Home = () => {
  const clickHandler = () => {
    console.log('clickHandler')
  }

  $getUserInfo({
   args:{
    year:2023
   },
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  return (
    <Layout.HomeLayout title="主页">
      <Button onPress={clickHandler} title='click me' />
    </Layout.HomeLayout>
  )
}
export default Home