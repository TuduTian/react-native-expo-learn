/**
 * 相机
 */
import { Camera, CameraType } from 'expo-camera';// 相机包
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import downloadFile from './downloadFile'
import * as MediaLibrary from 'expo-media-library';
export default function CameraView() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();//权限申请
  const [permissionResponse, requestPermission1] = MediaLibrary.usePermissions();
  /* if (!permissionResponse.granted) {
    requestPermission()
  } */
  useEffect(() => {
    if (!permissionResponse || !permissionResponse.granted) {
      requestPermission1()
    }
  }, [permissionResponse])
  const [ready, setReady] = useState(false);
  const { width } = Dimensions.get('window')

  const cameraDom = useRef(null)
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>没有获取相机的权限</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // 切换摄像头
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }



  // 拍照
  function qieziHandle() {
    if (ready) {
      cameraDom.current.takePictureAsync({
        base64: true,
        quality: 0.5,
      })
        .then(res => {
          downloadFile(res.uri)
        })
        .catch(err => {
          console.log('拍照失败', err)
        })
    }
  }

  return (
    <View style={styles.container}>
      <Camera ref={e => cameraDom.current = e} onCameraReady={() => setReady(true)} style={{ height: '100%', width: width * (6 / 4), justifyContent: 'center', alignItems: 'center' }} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>翻转</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={qieziHandle}>
            <Text style={styles.text}>茄子</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});