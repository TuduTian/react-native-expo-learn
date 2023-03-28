import * as FileSystem from "expo-file-system" //异步储存
import * as MediaLibrary from 'expo-media-library';
/**
 * 
 * @param uri 本地 
 */
export default async function downLoad(uri) {
  // 保存到相册
  const asset = await MediaLibrary.createAssetAsync(uri);
   //await MediaLibrary.createAlbumAsync('测试图库', asset, true);
  /* MediaLibrary.saveToLibraryAsync(uri).then(res=>{
    console.log('保存成功')
  }).catch(ERR=>{
    console.log(ERR,'失败');
    
  }) */
}