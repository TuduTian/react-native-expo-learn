/**
 *  从相册获取图片 然后传给裁剪组件进行裁剪图片
 */
import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'
const PhotoDemo = () => {
  const [image, setImage] = useState(null)
  // 点击事件
  const pinkImage = async (type) => {
    if (type == 1) {
      //选择一个照片进行 裁剪并且获取到uri
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, //选择的文件类型
        //  allowsEditing: true,// 总是裁剪
        allowsMultipleSelection: true,//多选
        aspect: [4, 4],//裁剪比例
        quality: 1,// 质量
      });
      if (!result.canceled) {
        console.log(result.assets)
        const uri = result.assets[0].uri
        setImage(uri)
      }
    }
    else if (type == 2) {
      let result = await ImagePicker.launchCameraAsync({
        allowsMultipleSelection: true
      })
      if (!result.canceled) {
        const uri = result.assets[0].uri
        setImage(uri)
      }
    }
  }
  return (
    <View>
      <Button title="从相册选择照片" onPress={() => pinkImage(1)} />
      <Button title="从相机选择图片" onPress={() => pinkImage(2)} />
      {/* fadeDuration渐入时间  */}
      <Image style={{ marginTop: 10, width: global.pxw(150), height: global.pxw(150) }} source={{ uri: image }} fadeDuration={300} resizeMode="contain" />
    </View>
  )
}

export default PhotoDemo